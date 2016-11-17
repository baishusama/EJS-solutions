var text = "'I'm the cook,' he said, 'it's my job.'";

// Change this call - console.log(text.replace(/A/g, "B"));

// My solution:
console.log(text.replace(/\B'/g, '"'));// get it while testing..

// Solution inspired by <<EJS>>'s hint:
console.log(text.replace(/^(')|(')$|(')(\W)|(\W)(')/g, function(str, singleQuote1, singleQuote2, singleQuote3, noneWord3, noneWord4, singleQuote4){
// !! NOTE the long series of arguments in the function!
// That's all for the matched groups in the RegExp, 
// since the '|' does NOT mean to have 2 matched groups at most.
    if (singleQuote1 || singleQuote2) {
        return '"';
    }
    else if (singleQuote3) {
        return '"' + noneWord3;
    }
    else if (singleQuote4) {
        return noneWord4 + '"';
    }
}));


// <<EJS>>'s solution is much more simple:
// Using string as the second argument instead of function like above,
// we no longer need to care about 'undefined' value
// and when there is no matched group it will simply be a ''.
// Additionally, (^) and ($)'s matched groups are always ''s.
console.log(text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2'));

// → "I'm the cook," he said, "it's my job."