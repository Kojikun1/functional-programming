import { User, Questions } from './interfaces';
import { pipe, curry } from './utils';
 
const createUser = function(id: number){
    return {
        userId: id,
        questions: []
    }
};

const cloneOjb = function(obj: {}) {
    return JSON.parse(JSON.stringify(obj));
}

const addQuestion = function(questionParams: Questions,
    user: User){
     const { qID, response,result, weight,} = questionParams;
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

const calcScore = function(user: User){
    return user.questions.reduce((total,question) => {
        return total + (question.result ? question.weight : 0)
    },0);
}

const calcPossible = function(user: User){
    return user.questions.reduce((tot,question) => {
        return tot + question.weight;
    },0)
}


const getProp = (prop: any,obj: any) => obj[prop];

const formatResults = (user: User) => calcScore(user) + " out of " + calcPossible(user);

const setConsoleData = (data: string) => console.log(data); 

const displayResults = pipe(
    formatResults,
    setConsoleData,
);

const displayUser = pipe(
    curry(getProp)('userId'),
    setConsoleData
);


const updateScore = function(questionsParams: Questions, user: User ){
    let usr = addQuestion(questionsParams,user);

    displayResults(usr);
    displayUser(usr);
}


