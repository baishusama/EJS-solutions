function Vector(x, y){
    this.x = x;
    this.y = y;
/*    this.v = {
        "x": x,
        "y": y,
        get length() {
            return Math.sqrt(this.x ^ 2 + this.y ^ 2);
        },
        set length(value) {// !! Uncaught SyntaxError: Setter must have exactly one formal parameter.
            // do nothing
        }
    };*/
}

Vector.prototype.plus = function(v){
    this.x = this.x + v.x;
    this.y = this.y + v.y;
};

Vector.prototype.minus = function(v){
    this.x = this.x - v.x;
    this.y = this.y - v.y;
};


// Changed and passed examination after reading <<EJS>>'s hint

function Vector(x, y){
    this.x = x;
    this.y = y;
}

// <<EJS>>'s plus and minus are pure functions (last solution part below)
Vector.prototype.plus = function(v){
    this.x = this.x + v.x;
    this.y = this.y + v.y;
    return this;
    // console.log("Vector{this.x: " + this.x + ", this.y: " + this.y + "}");
    // console.log("Vector{v.x: " + v.x + ", v.y: " + v.y + "}");
};

Vector.prototype.minus = function(v){
    this.x = this.x - v.x;
    this.y = this.y - v.y;
    return this;
};

/*// to see result in <<EJS>> online sandbox
Vector.prototype.toString = function(){
    return "Vector{x: " + this.x + ", y: " + this.y + "}";
};*/

Object.defineProperty(Vector.prototype, "length",
    {
        get: function() {
            return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
            // !!NOTE that trying power like (this.x ^ 2 + this.y ^ 2); is wrong !
            // Because in JavaScript, ^ means xor !
        }
    });


// <<EJS>>'s solution:

function Vector(x, y){
    this.x = x;
    this.y = y;
}

// <<EJS>>'s plus and minus are pure functions
Vector.prototype.plus = function(other){
    return new Vector(this.x + other.x, this.y + other.y);
};

Vector.prototype.minus = function(other){
    return new Vector(this.x - other.x, this.y - other.y);
};

Object.defineProperty(Vector.prototype, "length", {
    get: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
});