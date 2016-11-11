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

// My code:

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

function groupBy(ancestry, group){
    var detailList = group(ancestry);
    var averageList = {};
    for(var cent in detailList){
        averageList[cent] = average(detailList[cent]);
    }
    return averageList;
}