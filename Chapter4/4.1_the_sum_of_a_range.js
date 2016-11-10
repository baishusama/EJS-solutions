function range(start, end){
    var res = [];
    for(var i = start; i <= end; i++){
        res.push(i);
    }
    return res;
}

function sum(arr){
    var res = 0;
    for(var i = 0; i < arr.length; i++){
        res += arr[i];
    }
    return res;
}

// Bonus Assignment !~
function range(start, end, step){
    var res = [];
    if(step === undefined){
        for(var i = start; i <= end; i++){
            res.push(i);
        }
    }
    else if(step > 0){// step is supposed to be an int
        for(var i = start; i <= end; i += step){
            res.push(i);
        }
    }
    else if(step < 0){// step is supposed to be an int
        for(var i = start; i >= end; i -= -step){
            res.push(i);
        }
    }
    else {
        // something supposed not to happen
        // like NaN step, 0 step ...
    }
    return res;
}

// according to <<EJS>>'s hint
function range(start, end, step){
    // start/end/step is supposed to be an int
    var res = [];

    // initialize step to aviod infinite loops
    if(start > end){
        if(step === undefined
            || typeof step !== "number"
            || step >= 0){
            step = -1;
        }
    }
    else if(start < end){
        if(step === undefined
            || typeof step !== "number"
            || step <= 0){
            step = 1;
        }
    }
    else {// start === end // something supposed not to happen
        step = 0;
        res.push(start);
        // return res;
    }

    if(step > 0){
        for(var i = start; i <= end; i += step){
            res.push(i);
        }
    }
    else if(step < 0){
        for(var i = start; i >= end; i -= -step){
            res.push(i);
        }
    }
    
    return res;
}