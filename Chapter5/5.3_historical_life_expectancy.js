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

/*var byName = {};
ancestry.forEach(function(person){
    byName[person.name] = person;
});*/

// My codes after reading <<EJS>>'s hint:

function group(people){
    var res = {};
    people.forEach(function(person){
        var century = Math.ceil(person.died / 100);
        if(!(century in res)){
            res[century] = [];
        }
        res[century].push(person.died - person.born);
    });
    return res;
}

// // I misunderstood groupBy at first
// function groupBy(ancestry, group){
//     var detailList = group(ancestry);
//     var averageList = {};
//     for(var cent in detailList){
//         averageList[cent] = average(detailList[cent]);
//     }
//     return averageList;
// }

// to print the average ages for individual centuries
var centuries = group(ancestry);
for(var cent in centuries){
    console.log(cent + ": " + average(centuries[cent]));
}

// abstract the grouping operation
function groupBy(arr, func){
    var groups = {};
    arr.forEach(function(element){
        var groupName = func(element);
        if(!(groupName in groups)){
            groups[groupName] = [];
        }
        groups[groupName].push(element);
    });
    return groups;
}

// <<EJS>>'s solution:
function groupBy(array, groupOf) {
  var groups = {};
  array.forEach(function(element) {
    var groupName = groupOf(element);
    if (groupName in groups)
      groups[groupName].push(element);
    else
      groups[groupName] = [element];
  });
  return groups;
}

var byCentury = groupBy(ancestry, function(person) {
  return Math.ceil(person.died / 100);
});

for (var century in byCentury) {
  var ages = byCentury[century].map(function(person) {
    return person.died - person.born;
  });
  console.log(century + ": " + average(ages));
}

