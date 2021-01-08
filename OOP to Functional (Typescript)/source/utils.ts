const pipe = function(...fnc: any[]){
      return function(param: any){
          return fnc.reduce((amt,fnc)=> {
              return fnc(amt);
          },param)
      }
}

const sum = (a: number) => a + a;
const mult = (a: number) => a * a;

const calc = pipe(sum,mult);

console.log(calc(5));

const curry = function(fnc: Function,arity = fnc.length){
    return (function nextCurried(prevArgs: any[]){
        return function curried(nextArg: any){
            let args = [...prevArgs,nextArg];
            if(args.length >= arity){
                return fnc(...args);
            }else {
                return nextCurried(args);
            }
        }
    })([])
}


export { pipe, curry };