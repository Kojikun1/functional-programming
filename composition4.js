const scores = [50,6,100,0,10,75,8,60,90,80,0,30,110];


let multLower= (arr) => arr.map( val => (val < 10) ? val * 10 : val);

let removeOver100 = (arr) => arr.filter(val => val <= 100);

let removeZero = (arr) => arr.filter(val => val > 0);

let sumArr = (arr) => arr.reduce((acm,val) => {
    return acm + val
},0);

let countArr = (arr) => arr.reduce((acm,val) => {
    return acm + 1
},0);


function compose(...funcArr){
    return function(arr){
        return funcArr.reduceRight((cml, func)=> {
            return func(cml);
        },arr);
    };
};

const scoresArr = compose(removeZero,removeOver100,multLower);


console.log(scoresArr(scores));

console.log(sumArr(scoresArr(scores)));

console.log(countArr(scoresArr(scores)));

const avarage = function(arr){
      return sumArr(arr) / countArr(arr);
}

console.log(avarage(scoresArr(scores)));

const pipe = function(...funcArr){
       return function(arr){
           return funcArr.reduce((acml,func) => {
               return func(acml);
           },arr);
       }
}

const finalResult = pipe(scoresArr,avarage);

console.log(finalResult(scores));