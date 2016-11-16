var text = "'I'm the cook,' he said, 'it's my job.'";

// Change this call - console.log(text.replace(/A/g, "B"));

// My solution:
console.log(text.replace(/\B'/g, '"'));// get it while testing..

// Solution inspired by <<EJS>>'s hint:
console.log(text.replace(/^(')|(')$|(')(\W)|(\W)(')/g, function(str, char1, char2){
    if(char2 === undefined){
        return '"';
    }
    // ???
    // else if(char1 === "'"){
    //     return '"' + char2;
    // }
    // else if(char2 === "'"){
    //     return char1 + '"';
    // }
    // ???
    else {
        return (char1 + char2).replace(/'/, '"');
    }
}));

// <<EJS>>'s solution:
console.log(text.replace(/\B'/g, '"'));

// → "I'm the cook," he said, "it's my job."