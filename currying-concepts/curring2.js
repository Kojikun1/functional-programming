const p1 = { name: "A", price: 19.88, desc: 0.25}
const p2 = { name: "ABCD", price: 19.88, desc: 0.25}


function validationStringlength(min){
      return function(max){
          return function(error){
              return function(text){
                  const tamanho = (text || '').trim().length;

                  if(tamanho < min || tamanho > max){
                      throw error;
                  };
                  return "Valid Text";
              }
          }
      }
}

const checkValidString = function(func,value){
      try {
          func(value)
          return null;
      } catch (error) {
          return { error };
      }
}

const minMaxlength = validationStringlength(4)(255)("Invalid Text Size");

const r1 = checkValidString(minMaxlength,p1.name);
const r2 = checkValidString(minMaxlength,p2.name);

console.log(r1,r2);
