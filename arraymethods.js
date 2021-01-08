// reduce, map and filter 

let arr = [1,2,3,4,5];

let total = arr.reduce(function(accumulator,elem) {
       return accumulator + elem
},0);

console.log(total);


let newArray = arr.map(function(val) {
    return val ** 2;
})

console.log(newArray);

let filterArray = arr.filter(function(val) {
    return val <= 3;
})

console.log(filterArray);

