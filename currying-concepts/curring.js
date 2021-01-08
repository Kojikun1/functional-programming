function soma(a,b,c){
    return a + b + c;
}

// curring //

function soma2(a){
    return function(b){
        return function (c){
            return a + b + c;
        };
    };
};

console.log(soma(1,2,3));

console.log(soma2(1)(2)(3))


