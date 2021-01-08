let str = 'Innovation distinguishes between a leader and a follower';

const trim = (str) => str.replace(/^\s*|\s*$/g,'');

const noPunct = (str) => str.replace(/[?.,!]/g,'');

const capitalize = (str) => str.toUpperCase();

const breakout = (str) => str.split(' ');

const noArticles = (str) => (str !== "A" && str !== "AN" && str !== "THE");

const filterArticles = (arr) => arr.filter(noArticles);


const compose = function(...arr){
     return function(x){
         return arr.reduceRight((acm, func) => {
               return func(acm);
         },x);
     };
};

const result = compose(filterArticles,breakout,capitalize,noPunct,trim);

console.log(result(str));

const pipe = function(...arr){
    return function(x){
        return arr.reduce((amc,func) => func(amc), x );
    }
}

const verifyString = pipe(trim,noPunct,capitalize,breakout,filterArticles);

console.log(verifyString(str));

