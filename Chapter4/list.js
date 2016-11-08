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
    var cur = list;
    while(cur){// pay attention to the end condition
        arr.push(cur.value);
        cur = cur.rest;
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