function chessBoard(size){
    var s = size || 8;
    var board = "";
    var oddLine = true;
    var oddRow = true;
    for(var i = 0; i < s; i++){
        var a = oddLine ? ' ' : '#';
        var b = oddLine ? '#' : ' ';
        for(var j = 0; j < s; j++){
            board += oddRow ? a : b;
            oddRow = !oddRow;
        }
        board += '\n';
        oddLine = !oddLine;
        oddRow = true;
    }
    console.log(board);
}

// Developed after reading <<EJS>>'s hint

function chessBoard(size){
    var s = size || 8;
    var board = "";
    for(var i = 0; i < s; i++){
        for(var j = 0; j < s; j++){
            board += (i + j) % 2 === 0 ? ' ' : '#';
        }
        board += '\n';
    }
    console.log(board);
}

// !! ANSWER IN <<EJS>>

// In the answer, my ternary operator ( ? : )
// is simply changed into if/else pair.