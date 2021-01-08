let users = [
    {name: "James", score: 30, tries: 1},
    {name: "Mary", score: 110, tries: 4},
    {name: "Henry", score: 80, tries: 3},
];

let newScore = function(arr,name,amt){
      arr.forEach(val => {
          if(val.name.toLowerCase() === name.toLowerCase()){
              val.score += amt;
          };
      });
      return arr;
}

let newTries = function(arr,name){
    arr.forEach(val => {
        if(val.name.toLowerCase() === name.toLowerCase()){
            val.tries++;
        }
    });
    return arr;
}

