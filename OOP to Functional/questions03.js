const { curry, pipe } = require('./curring');

const createUser = function(id){
    return {
        userId: id,
        questions: []
    }
}

const cloneOjb = function(obj) {
    return JSON.parse(JSON.stringify(obj));
}

const addQuestion = function(qID,response,result,weight,
    user){
     const questions = cloneOjb(user.questions);
     const newQuestion = {
         qID,
         response,
         result,
         weight,
     }
     return {
         userId: user.userId,
         questions: [...questions,newQuestion],
     }
}

const calcScore = function(user){
    return user.questions.reduce((total,question) => {
        return total + (question.result ? question.weight : 0)
    },0);
}

const calcPossible = function(user){
    return user.questions.reduce((tot,question) => {
        return tot + question.weight;
    },0)
}

const formatResults = (user) => calcScore(user) + " out of " + calcPossible(user);

const getProp = (prop,obj) => obj[prop];

const setDomElem = (elem, data) => elem.innerHTML = data;

const setConsoleData = (data) => console.log(data); 

const displayResults = pipe(
    formatResults,
    setConsoleData,
);

const diplayUser = pipe(
    curry(getProp)('userId'),
    setConsoleData
);

const updateScore = function(user,qID,response,result,weight){
    let usr = addQuestion()
}






