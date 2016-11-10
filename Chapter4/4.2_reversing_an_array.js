function reverseArray(arr){
    var res = [];
    for(var i = 0; i < arr.length; i++){
        res[i] = arr[arr.length - 1 - i];
    }
    return res;
}

function reverseArrayInPlace(arr){
    var temp = null;
    var len = arr.length;
    for(var i = 0; i <= Math.floor(len / 2); i++){
        temp = arr[i];
        arr[i] = arr[len - 1 - i];
        arr[len - 1 - i] = temp;
    }
    return arr;// added in <<EJS>> solution
}


// ???:

// Thinking back to the notes about side effects
// and pure functions in the previous chapter, 
// which variant do you expect to be useful in more situations?
// Which one is more efficient?


// According to <<EJS>>'s hint,
// function reverseArray can also be:
// 1. with 'unshift' method:
function reverseArray(arr){
    var res = [];
    for(var i = 0; i < arr.length; i++){
        res.unshift(arr[i]);
    }
    return res;
}
// 2. with 'push' method:
function reverseArray(arr){
    var res = [];
    for(var i = arr.length - 1; i >= 0; i--){
        res.push(arr[i]);
    }
    return res;
}