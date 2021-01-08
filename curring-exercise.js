const {curry, pipe} = require('./curring');
let users = [
    {name: "James", score: 30, tries: 1},
    {name: "Mary", score: 110, tries: 4},
    {name: "Henry", score: 80, tries: 3},
];
let storeUser = function(user){
    return users.map(val => {
        if(val.name.toLowerCase() === user.name.toLowerCase()){
           return user;
        }else {
            return val;
        }
    });
}
let getUser = function(arr,name){
    return arr.reduce((obj,val) => {
        if(val.name.toLowerCase() === name.toLowerCase()){
            return val;
        }else {
            return obj;
        }
    },null)
}

let updateScore = function(newAmt,user) {
    if(!user) return null;
    let newUser = JSON.parse(JSON.stringify(user));
    newUser.score += newAmt;
    return newUser;
}
let updateTries = function(user){
    if(user){
        user.tries++;
        return user;
    }
}

const cloneObj = function(user){
    JSON.parse(JSON.stringify(user));
}

/*let usr = getUser(users,"James");
let usr1 = updateScore(user,50);
let usr2 = updateTries(usr1);
console.log(storeUser(usr2)); */

const updateUsers = pipe(
    curry(getUser)(users),
    cloneObj,
    curry(updateScore)(50),
    updateTries,
)

console.log(updateUsers('James'));