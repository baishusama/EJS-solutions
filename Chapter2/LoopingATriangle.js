function loopATriangle(width){
    var w = width || 7;
    var sharps = "#";
    for(var i = 0; i < w; i++){
        console.log(sharps);
        sharps = sharps + '#';
    }
}

// According to <<EJS>>'s hint,
// try a different loopATriangle func
// with String's .length prop

function loopATriangle(width){
    var w = width || 7;
    var sharps = "#";
    while(sharps.length <= w){
        console.log(sharps);
        sharps = sharps + "#";
    }
}

// According to <<EJS>>'s hint,
// short 'sharps = sharps + "#";'
// to 'sharps += "#";'

function loopATriangle(width){
    var w = width || 7;
    var sharps = "#";
    while(sharps.length <= w){
        console.log(sharps);
        sharps += "#";
    }
}

// !! ANSWER IN <<EJS>>

function loopATriangle(width){
    var w = width || 7;
    //var sharps = "#";
    for(var sharps = "#"; sharps.length <= w; sharps += "#"){
        console.log(sharps);
        //sharps = sharps + '#';
    }
}