// NEED to run at the SANDBOX: http://eloquentjavascript.net/code/#5
// And has sth...

/*// misunderstood inner argument at first
function StretchCell(inner, width, height){
    this.inner = inner;
    this.width = width;
    this.height = height;
    TextCell.call(this, inner);
}

StretchCell.prototype = Object.create(TextCell.prototype);

StretchCell.prototype.minWidth = function(){
    return Math.max(TextCell.minWidth.call(this), this.width);
};

StretchCell.prototype.minHeight = function(){
    return Math.max(TextCell.minHeight.call(this), this.height);
};

StretchCell.prototype.draw = function(){
    TextCell.draw.call(this, this.minWidth(), this.minHeight());
};*/

function StretchCell(inner, width, height){
    this.inner = inner;
    this.width = width;
    this.height = height;
}

StretchCell.prototype.minWidth = function(){
    return Math.max(this.inner.minWidth(), this.width);
};

StretchCell.prototype.minHeight = function(){
    return Math.max(this.inner.minHeight(), this.height);
};

StretchCell.prototype.draw = function(w, h){
    return this.inner.draw(Math.max(this.minHeight(), w), Math.max(this.minHeight(), h));
};// My draw function is wrong ??

// <<EJS>>'s solution - differs mine with draw function:

function StretchCell(inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
}

StretchCell.prototype.minWidth = function() {
  return Math.max(this.width, this.inner.minWidth());
};
StretchCell.prototype.minHeight = function() {
  return Math.max(this.height, this.inner.minHeight());
};
StretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height);
};