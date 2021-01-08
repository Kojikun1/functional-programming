const mainApp = (function(){
    let currentUser = 0;

    let users = [
        {name: "James", score: 30, tries: 1},
        {name: "Mary", score: 110, tries: 4},
        {name: "Henry", score: 80, tries: 3},
    ];

    let updateScore = function(newAmt) {
        users[currentUser].score += newAmt;
    }
    let returnUsers = function(){
        return users;
    }
    let updateTries = function(){
        users[currentUser].tries++;
    }
    let updateUser = function(newUser){
        currentUser = newUser;
    }
    return {
        updateScore,
        returnUsers,
        updateTries,
        updateUser
    }
})();

mainApp.updateUser(1);