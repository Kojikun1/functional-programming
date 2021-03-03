var fp = require('lodash/fp');

const scores = [50,6,100,0,10,75,8,60,90,80,0,30,110];

//const boostSingScores = scores.map(val => val < 10 ? val * 10: val);

//const rmvOverScores = scores.filter(val => val <= 100);

//const rmvZeroScores = scores.filter(val => val > 0);

// Convert each statement to a function that can accept and act on any array.

const boostSingScores = fp.map(val => val < 10 ? val * 10: val);

const rmvOverScores = fp.filter(val => val <= 100);

const rmvZeroScores = fp.filter(val => val > 0);

// compose a function that will remove both zero or lower scores and scores ever 100. Test it using the scores array.

const rmvZeroAndOver100 = fp.pipe(rmvZeroScores,rmvOverScores);

console.log(rmvZeroAndOver100(scores));

// compose a function that will do all the modifications to an array. Test it using the scores array.

const result= fp.pipe(rmvZeroScores,rmvOverScores,boostSingScores);

console.log(result(scores));

// Create a function that will accept an array and return the avereage.

const average = function(array) {
    const sum = array.reduce((sum,item) => {
          return sum + item;
    },0)
    return sum / array.length;
}

// Compose a function that will ado all the modifications on an array and return an average.


const finalResult = fp.pipe(
    boostSingScores,
    rmvOverScores,
    rmvZeroScores,
    average,
);

console.log(finalResult(scores));








