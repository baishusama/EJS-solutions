function countBs(str){
    var count = 0;
    for(var i = 0; i < str.length; i++){
        if(str.charAt(i) === 'B'){
            count++;
        }
    }
    return count;
}

function countChar(str, char){
    var count = 0;
    for(var i = 0; i < str.length; i++){
        if(str.charAt(i) === char){
            count++;
        }
    }
    return count;
}

function countBs(str){
    return countChar(str, 'B');
}