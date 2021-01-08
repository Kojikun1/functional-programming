const mainApp = (function(){

    let users = [
        {id: 1, name: "James", score: 30, tries: 1},
        {id: 2,name: "Mary", score: 110, tries: 4},
        {id: 3,name: "Henry", score: 80, tries: 3},
    ];

    let updateScore = function(id,newAmt) {
        users[currentUser].score += newAmt;
    }
    let returnUsers = function(){
        return users;
    }
    let updateTries = function(id){
        
        for(let key of users){
            if(key.id === id){
                key.tries++;
            }
        }
    }

    return {
        updateScore,
        returnUsers,
        updateTries,
    }
})();

console.log(mainApp.returnUsers());

mainApp.updateTries(1);
mainApp.updateTries(1);

console.log(mainApp.returnUsers());