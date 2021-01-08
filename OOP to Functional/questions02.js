class UserRecord{
     constructor(id){
         this.userId = id;
         this.questions = [];
     }
     addQuestions(qID,response,result,weight){
          this.questions.push({
              qID,
              response,
              result,
              weight,
          });
     };
     get myScore(){
         let score = 0;
         for(let i = 0; i < this.questions.length; i++){
             let quest = this.questions[i];
             if(quest.result){
                 score += quest.weight;
             };
         };
         return score;
     };
     get possScore(){
         let possible = 0;
         for(let i = 0; i < this.questions.length; i++){
             possible += this.questions[i].weight;
         };
         return possible;
     };
     updateScore(){
        console.log("Score " + this.myScore + " out of " + this.possScore );
     };
}

let user1 = new UserRecord(1);

user1.addQuestions(1,"Right answer",true,1);
user1.addQuestions(1,"Wrong answer",false,2);

user1.updateScore();