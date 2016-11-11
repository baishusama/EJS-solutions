// NEED to run at the SANDBOX: http://eloquentjavascript.net/code/#5
// And has data structures like:
// ancestry = [
//     {
//         "name": "...",
//         "sex": "f",
//         "born": 1900,
//         "died": 2016,
//         "father": "fatherName",
//         "mother": "motherName"
//     },
//     {
//         ...
//     }
// ]

function average(array){
    function plus(a, b){ return a + b; }
    return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person){
    byName[person.name] = person;
});

// My code:

function diffArr(){
    var res = [];
    for(var person in byName){
        var child = byName[person];
        var mother = byName[child.mother];
        if(mother){
            res.push(child.born - mother.born);
        }
    }
    return res;
}

console.log(average(diffArr()));

// <<EJS>>'s solution:

var differences = ancestry.filter(function(person){
    return byName[person.mother] !== null;
}).map(function(person){
    return person.born - byName[person.mother].born;
});

console.log(average(differences));

// My note:
// using Array's two method - filter & map
// makes the codes simple and easy to understand