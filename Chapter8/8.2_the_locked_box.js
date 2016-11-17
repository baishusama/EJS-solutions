var box = {
    locked: true,
    unlock: function(){ this.locked = false; },
    lock: function(){ this.locked = true; },
    _content: [], // !! NOTE the '_'.
    get content() {
        if(this.locked) throw new Error("Locked!");
        return this._content;
    }
};

function withBoxUnlocked(body) {
    // My code here.
    try {
        if(box.locked) box.unlock();
        body();
        return box.content;// According to <<EJS>>'s solution, it should be 'return body();'
    }
    catch(e){
        throw e;
    }
    finally {
        // ensure that the box is locked again before returning anyway
        box.lock();
    }

    // <<EJS>>'s solution:
    // My opinion is that: 
    //   It should have taken the following situation into account.
    //   Even if the box is already unlocked,
    //   the body() would probably throw a error somehow.
    //   In that case, the try-finally block will not run
    //   if you put body() out of the try-finally block.
    // To sum up, the body() at 1st line below is better in the try-finally block.
    if(!box.locked) return body();

    box.unlock();
    try {
        // if(box.locked) box.unlock();
        // body();
        // return box.content;
        return body();
    }
    /*catch(e){
        throw e;
    }*/
    finally {
        // ensure that the box is locked again before returning anyway
        box.lock();
    }
}

withBoxUnlocked(function() {
    box.content.push("gold piece");
});

try {
    withBoxUnlocked(function() {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised:", e);
}

console.log(box.locked);
// → true