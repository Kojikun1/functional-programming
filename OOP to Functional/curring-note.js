const data = [
        {id: 1, name: 'Koji', score: 100, tries: 1},
        {id: 2, name: 'Mayumi', score: 100, tries: 1},
        {id: 3, name: 'Komatsu', score: 100, tries: 1}
    ]

const cloneObj = function(obj){
     return JSON.parse(JSON.stringify(obj));
}

const getUser = function(obj,name){
      for(let i = 0; i < obj.length; i++){
          if(obj[i].name.toLowerCase() === name.toLowerCase()){
              return obj[i];
          }else{
              return null 
          }
      }
}

const updateTries = function(user){
    if(!user) return null;
    user.tries++;
    return user;
      
}
const updateScore = function(score,user){
     if(!user) return null;
     user.score += score;
     return user;
}

const pipe = function(...fncArr){
     return function(user){
         return fncArr.reduce((amc,fnc)=> {
              return fnc(amc);
         },user);
     }
}
const curry = function(fnc,arity = fnc.length){
     return (function nextCurried(prevArgs){
         return function curried(nextArg){
             let args = [...prevArgs,nextArg];
             if(args.length >= arity){
                 return fnc(...args);
             }else {
                 return nextCurried(args);
             }
         }
     })([])
}

const  UpdateUser = pipe(
    curry(getUser)(data),
    cloneObj,
    curry(updateScore)(50),
    updateTries,
)
console.log(UpdateUser('koji'));

const add = num => num + num;
const mult = num => num * num;

const calc = pipe(add,mult);

console.log(calc(5));

module.exports = { curry, pipe }