const R = require('ramda');

let users = [
    {name: "James", score: 30, tries: 1},
    {name: "Mary", score: 110, tries: 4},
    {name: "Henry", score: 80, tries: 3},
];


const storeUser = (arr,user) => 
    R.map( val => 
       R.eqBy(R.toLower,val.name,user.name) ? user : val
    ,arr);

const getUser = (arr,name) => R.reduce((obj,val) => R.eqBy(R.toLower,val.name,name) ? R.clone(val) : obj,null,arr);
