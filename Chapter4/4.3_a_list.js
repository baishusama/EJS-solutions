function arrayToList(arr){
    var list = {};
    var temp = null;
    for(var i = arr.length - 1; i >= 0; i--){
        list = {};// At first, I forget this line, and made a recusive object(list)
        list.value = arr[i];
        list.rest = temp;
        temp = list;
    }
    return list;
}

function listToArray(list){
    var arr = [];
    var node = list;
    while(node){// pay attention to the end condition
        arr.push(node.value);
        node = node.rest;
    }
    return arr;
}

function prepend(elem, list){
    var newList = {};
    newList.value = elem;
    newList.rest = list;
    return newList;
}

function nth(list, n){
    var res = {};
    var val = 0;
    // initialize n
    if(n < 0){
        n = 0;
    }
    for(var i = 0; i < n; i++){
        res = list.rest;
        if(res === null){
            return undefined;
            // val = undefined;
            // break;
        }
        else {
            val = res.value;
        }
    }
    // return res;
    return val;
}
// a recursive version of nth
function nth(list, n){
    if(n > 0){
        if(list.rest === null){
            return undefined;
        }
        else {
            return nth(list.rest, n - 1);//at first I forgot 'return'...
        }
    }
    else if(n === 0){
        return list.value;
    }
    else {// n < 0
        return undefined;
    }
}


// After reading <<EJS>>'s hint

function arrayToList(arr){
    var list = null;
    // var temp = null;
    for(var i = arr.length - 1; i >= 0; i--){
        list = {
            'value': arr[i],
            'rest': list // temp
        };
        // temp = list;
    }
    return list;
}

function listToArray(list){
    var arr = [];
    for(var node = list; node; node = node.rest){
        arr.push(node.value);
    }
    return arr;
}

// <<EJS>>'s solution:

function prepend(elem, list){
    return {value: elem, rest: list};
}


function nth(list, n){// Ignores cases where n < 0
    if(!list)
        return undefined;
    else if(n == 0)
        return list.value;
    else
        return nth(list.rest, n - 1);
}
