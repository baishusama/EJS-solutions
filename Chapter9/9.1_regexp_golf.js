// Could run at the SANDBOX: http://eloquentjavascript.net/code/#9.1
// Using the 'verify' function and test cases to test our RegExps.

// P.S. My solution is in lower case 
//      and <<EJS>>'s solution is in UPPER case.

// car and cat
var re1 = /ca[rt]/;

// pop and prop
var re2 = /pr?op/;

// ferret, ferry and ferrari
var re3 = /ferr(et|y|ari)/;

// Any word ending in ious
var re4 = /\b.*ious\b/;// this matches the word ending in ious
var RE4 = /ious\b/;// this matches the ending ious

// A whitespace character followed by a dot, comma, colon, or semicolon
var re5 = /\s(\.|,|:|;)/;
var RE5 = /\s[.,:;]/; // make use of [] and '.' in [] is just '.' // much more simple

// A word longer than six letters
var re6 = /\b\w{7,}\b/;// this matches a word longer than 6 letters
var RE6 = /\w{7,}/;// this matches any continuous word characters more than 6

// A word without the letter e
var re7 = /\b[a-df-z]+\b/;
// Well, my solution is initially /\b[a-df-z]+\b/gi.
// But according to the test function 'verify',
// the global(g) seems to bring trouble.
// So I remove them both - g as well as i :(
var RE7 = /\b[a-df-z]+\b/i;