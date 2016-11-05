function fizzBuzz(){
    var res = "";
    for(var i = 1; i <= 100; i++){
        res = "";
        if(i % 3 === 0 && i % 5 === 0){
            res += "fizzBuzz";
        }
        else if(i % 3 === 0){
            res += "Fizz";
        }
        else if(i % 5 === 0){
            res += "Buzz";
        }
        else {
            res += i;
        }
        console.log(res);
    }
}

// Developed after reading <<EJS>>'s hint

function fizzBuzz(){
    var res = "";
    for(var i = 1; i <= 100; i++){
        res = "";
        if(i % 3 === 0 || i % 5 === 0){
            res += (i % 3 === 0 )?"Fizz":"";
            res += (i % 5 === 0 )?"Buzz":"";
        }
        else {
            res += i;
        }
        console.log(res);
    }
}

// !! ANSWER IN <<EJS>>

function fizzBuzz(){
    var res = "";
    for(var i = 1; i <= 100; i++){
        res = "";
        if(i % 3 === 0){
            res += "Fizz";
        }
        if(i % 5 === 0){
            res += "Buzz";
        }
        console.log(res || i);  
    }
}