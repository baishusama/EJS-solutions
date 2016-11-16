var box = {
    locked: true,
    unlock: function(){ this.locked = false; },
    lock: function(){ this.locked = true; },
    _content: [],
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
        return box.content;
    }
    catch(e){
        throw e;
    }
    finally {
        // ensure that the box is locked again before returning anyway
        box.lock();
    }

    // <<EJS>>'s solution:
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