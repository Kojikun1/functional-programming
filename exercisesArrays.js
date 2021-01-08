const scores = [50,6,100,0,10,75,8,60,90,80,0,30,110];

// Any scores that are below 10 needs to be multiplied by 10 and the new  value included.

let arr1 = scores.map( val => {
   return (val < 10) ? val * 10 : val;
});

console.log(arr1);

// Remove any scores that are over 100.

let arr2 = arr1.filter(val => !(val > 100));

console.log(arr2);

// Remove any scores that are 0 or below.

let arr3 = arr2.filter(val => val > 0);

console.log(arr3);

// Sum the scores. 

let arr4 = arr3.reduce((acm,val) => {
    return acm + val
},0);

console.log(arr4);

// Provide a count for the number of scores still remaining.

let arr5 = arr3.reduce((acm,val) => {
    return acm + 1
},0);

console.log(arr5)

