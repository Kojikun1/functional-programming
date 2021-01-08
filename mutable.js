'use strict'
const arr = [3,2,1,5,4];

Object.freeze(arr);

const cloneObj = function(arr){
    return JSON.parse(JSON.stringify(arr));
}
const newArr = cloneObj(arr).sort();

console.log(newArr);

console.log(arr);


const obj = {
    fName: "Steven",
    lName: "Hancock",
    score: 85,
    completion: true,
    question: {
        q1: {success: true, value: 1},
        q2: {success: false, value: 1}
    }
}

const obj2 = Object.assign({},obj);

const obj3 = JSON.parse(JSON.stringify(obj));

obj2.score = 90;
obj2.question.q1.value = 5;

obj3.question.q2.value = 4;

console.log("obj2: ",obj2);
console.log("obj: " , obj );
console.log("obj3: " , obj3 );
console.log("obj: " , obj );