// <<EJS>>'s solution is almost same as mine:
function every(arr, test){
    for(var i = 0; i < arr.length; i++){
        if(!test(arr[i])) return false;
    }
    return true;
}

function some(arr, test){
    for(var i = 0; i < arr.length; i++){
        if(test(arr[i])) return true;
    }
    return false;
}
