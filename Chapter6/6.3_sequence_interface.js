// Not quite understand this exercise's intention,
// but still write codes according to <<EJS>>'s hint:

function Sequence(colle){
    this.from = colle[0];
    this.to = colle[colle.length - 1];
    this.state = this.from;// initially
    this.length = colle.length;
}
Sequence.prototype = Object.create(Object.prototype);
Sequence.prototype.logSome = function(number){
    return function(sq){
        var num = number || sq.length;
        for(sq.state = sq.from; sq.state < sq.from + Math.min(sq.length, num); sq.state++){
            console.log(sq.state);
        }
    };
};
var logFive = new Sequence([]).logSome(5);//Sequence.logSome(5);

function ArraySeq(arr){
    Sequence.call(this, arr);
}
ArraySeq.prototype = Object.create(Sequence.prototype);

function RangeSeq(from, to){
    var arr = [];
    for(var i = from; i <= to; i++){
        arr.push(i);
    }
    Sequence.call(this, arr);
}
RangeSeq.prototype = Object.create(Sequence.prototype);


// <<EJS>>'s solution:

// I am going to use a system where a sequence object has two methods:
//
// * next(), which returns a boolean indicating whether there are more
//   elements in the sequence, and moves it forward to the next
//   element when there are.
//
// * current(), which returns the current element, and should only be
//   called after next() has returned true at least once.

function logFive(sequence) {
  for (var i = 0; i < 5; i++) {
    if (!sequence.next())
      break;
    console.log(sequence.current());
  }
}

function ArraySeq(array) {
  this.pos = -1;
  this.array = array;
}
ArraySeq.prototype.next = function() {
  if (this.pos >= this.array.length - 1)
    return false;
  this.pos++;
  return true;
};
ArraySeq.prototype.current = function() {
  return this.array[this.pos];
};

function RangeSeq(from, to) {
  this.pos = from - 1;
  this.to = to;
}
RangeSeq.prototype.next = function() {
  if (this.pos >= this.to)
    return false;
  this.pos++;
  return true;
};
RangeSeq.prototype.current = function() {
  return this.pos;
};

// This alternative approach represents the empty sequence as null,
// and gives non-empty sequences two methods:
//
// * head() returns the element at the start of the sequence.
// 
// * rest() returns the rest of the sequence, or null if there are no
//   elemements left.
//
// Because a JavaScript constructor can not return null, we add a make
// function to constructors of this type of sequence, which constructs
// a sequence, or returns null if the resulting sequence would be
// empty.

function logFive2(sequence) {
  for (var i = 0; i < 5 && sequence != null; i++) {
    console.log(sequence.head());
    sequence = sequence.rest();
  }
}

function ArraySeq2(array, offset) {
  this.array = array;
  this.offset = offset;
}
ArraySeq2.prototype.rest = function() {
  return ArraySeq2.make(this.array, this.offset + 1);
};
ArraySeq2.prototype.head = function() {
  return this.array[this.offset];
};
ArraySeq2.make = function(array, offset) {
  if (offset == null) offset = 0;
  if (offset >= array.length)
    return null;
  else
    return new ArraySeq2(array, offset);
};

function RangeSeq2(from, to) {
  this.from = from;
  this.to = to;
}
RangeSeq2.prototype.rest = function() {
  return RangeSeq2.make(this.from + 1, this.to);
};
RangeSeq2.prototype.head = function() {
  return this.from;
};
RangeSeq2.make = function(from, to) {
  if (from > to)
    return null;
  else
    return new RangeSeq2(from, to);
};

// TEST cases:

logFive2(ArraySeq2.make([1, 2]));
// → 1
// → 2
logFive2(RangeSeq2.make(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104