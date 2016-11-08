function deepEqual(obj1, obj2){
    if(obj1 === null){
        if(obj2 === null){
            // return true;
        }
        else {
            return false;
        }
    }
    else if(typeof obj1 === "object"){
        if(typeof obj2 === "object"){
            // 1. make sure the number of props is equal:
            var count = 0;
            for(var key in obj1){
                count++;
            }
            for(var key in obj2){
                count--;
            }
            if(count !== 0){
                return false;
            }
            // 2. make sure the props' content is the same:
            for(var key in obj1){
                if(!deepEqual(obj1[key], obj2[key])){
                    return false;
                }
            }
            // return true;
        }
        else {
            return false;
        }
    }
    else {
        return obj1 === obj2;
    }
    /*
        Returning the correct value from the function 
        is best done by immediately returning false 
        when a mismatch is noticed 
        and returning true at the end of the function.
    */
    return true;
}