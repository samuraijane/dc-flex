// did not include an individual if statement for a win using a diagonal line: currently will return null

function ticTacToe (arr) {
    for (i=0; i<arr.length; i++) {
        if ((arr[i][0] === arr[i][1]) && (arr[i][0] === arr[i][2])) { //can't do a === b === c, only one set of ===. need to use && operator. 
            return arr[i][0];
        } else if ((arr[0][i] === arr[1][i]) && (arr[0][i] === arr[2][i])) {
            return arr[0][i];
        }
    }
    return null;
}

console.log(ticTacToe([
    ['O', 'O', 'O'],
    ['X', null, 'X'],
    [null, 'X', null]
    ]));

console.log(ticTacToe([
    ['O', 'X', 'O'],
    ['X', 'X', 'O'],
    [null, 'X', null]
    ]));

console.log(ticTacToe([
    ['O', 'X', 'O'],
    ['X', 'X', 'O'],
    [null, 'O', null]
    ]));
  