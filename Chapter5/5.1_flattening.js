function flatten(arrOfArr){
    return arrOfArr.reduce(function(resArr, nthArr){
        return resArr.concat(nthArr);
    }, []);
}// Note that reduce is also a pure function (will not change arrOfArr)