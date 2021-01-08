let users = [
    {name: "James", score: 30, tries: 1},
    {name: "Mary", score: 110, tries: 4},
    {name: "Henry", score: 80, tries: 3},
];
let storeUser = function(user){
    for(let i = 0; i < users.length; i++){
        if(users[i].name.toLowerCase() === user.name.toLowerCase()){
            users[i] = user;
            break;
        }
    }
    return null;
}
let getUser = function(arr,name){

    for(let i = 0; i < arr.length; i++){
        if(arr[i].name.toLowerCase() === name.toLowerCase()){
            return JSON.parse(JSON.stringify(arr[i]));
        }
    }
    return null;
}

let updateScore = function(user,newAmt) {
    if(!user) return null;
    let newUser = JSON.parse(JSON.stringify(user));
    newUser.score += newAmt;
    return newUser;
}
let returnUsers = function(){
    return users;
}
let updateTries = function(user){
    user.tries++;
    return user;
}

let usr = getUser(users,"James");

let usr1 = updateScore(usr,50);

let usr2 = updateTries(usr1);

storeUser(usr2);

console.log(users);

console.log(usr);