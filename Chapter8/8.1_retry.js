function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
    if (Math.random() < 0.5)
        return a * b;
    else
        throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
    // My initial code here.
    for(;;){
        try {
            return primitiveMultiply(a, b);
        }
        catch(error){
            if(error instanceof MultiplicatorUnitFailure){
                console.log("I met error MultiplicatorUnitFailure...");
            }
            else {
                throw error;
            }
        }
    }

    // My code with 'break' after reading <<EJS>>'s hint:
    var res = 0;
    for(;;){
        try {
            res = primitiveMultiply(a, b);
            break;
        }
        catch(error){
            if(error instanceof MultiplicatorUnitFailure){
                console.log("I met error MultiplicatorUnitFailure...");
            }
            else {
                throw error;
            }
        }
    }
    return res;

    // My code with recursion after reading <<EJS>>'s hint:
    try {
        return primitiveMultiply(a, b);
    }
    catch(error){
        if(error instanceof MultiplicatorUnitFailure){
            console.log("I met error MultiplicatorUnitFailure...");
            return reliableMultiply(a, b);
        }
        else {
            throw error;
        }
    }

    // <<EJS>>'s solution:
    for(;;){
        try {
            return primitiveMultiply(a, b);
        } catch (e) {
            if(!(e in primitiveMultiply))
                throw e;
        }
    }
}

console.log(reliableMultiply(8, 8));
// → 64

