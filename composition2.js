let str = 'Innovation distinguishes between a leader and a follower';

const trim = function(str){
    return str.replace(/^\s*|\s*$/g,'');
}

const noPunct = function(str){
    return str.replace(/[?.,!]/g,'');
}

const capitalize = function(str){
    return str.toUpperCase();
}

const breakout = function(str){
    return str.split(' ');
}

const noArticles = function(str){
    return (str !== "A" && str !== "AN" && str !== "THE");
}

const filterArticles = function(arr = []){
    return arr.filter(noArticles);
}

console.log(filterArticles(breakout(capitalize(noPunct(trim(str))))));

