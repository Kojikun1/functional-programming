const creatorGretting = function(gretting){
    return function(name){
        console.log(`${gretting} ${name}`);
    }
}

const newgretting = creatorGretting('Welcome');

newgretting("Henry");

const curry = function(fn, arity = fn.length){
    return (function nextCurried(prevArgs){
          return function curried(nextArg){
              var args = [...prevArgs, nextArg];
              if(args.length >= arity){
                  return fn(...args);
              }else {
                  return nextCurried(args);
              }
          }
    })([]);
};

const pipe = function(...fncArr){
    return function(x){
        return fncArr.reduce((acml,fnc)=> {
            return fnc(acml)
        },x);
    } 
}

const ffun = function(a, b, c){
    return a + b + c;
}

const gfun = function(d, e){
    return d + e;
}

const hfun = function(f, g, h){
    return f + g + h;
}

const curriedF = curry(ffun);
const curriedG = curry(gfun);
const curriedH = curry(hfun);

const newFun = pipe(
    curriedF(1)(2),
    curriedG(3),
    curriedH(3)(3)
);

console.log(newFun(6))

module.exports = {curry, pipe}
