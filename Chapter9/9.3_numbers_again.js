var jsStyleNumber_MySolution = /^[+-]?(\d+|\.\d+|\d+\.|\d+\.\d+)([eE][+-]?\d+)?$/;

// <<EJS>>'s hint :
// Matching the optional sign in front of the number, 
// as well as in front of the exponent, 
// can be done with [+\-]? or (\+|-|) (plus, minus, or nothing).

var jsStyleNumber_Hint1 = /^[+\-]?(\d+\.\d*|\.?\d+)([eE][+\-]?\d+)?$/;
var jsStyleNumber_Hint2 = /^[+\-]?(\d+\.?\d*|\.\d+)([eE][+\-]?\d+)?$/;

// <<EJS>>'s solution:

var jsStyleNumber_EjsSolution = /^(\+|-|)(\d+(\.\d*)?|\.\d+)([eE](\+|-|)\d+)?$/;