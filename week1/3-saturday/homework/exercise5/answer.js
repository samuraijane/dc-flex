// // Print a Square
function printSquare(x) {
    for (var i = 0; i < x; i++){
        var y = 0;
        var z = "";
        while (y < x) {
            z = z + "#";
            y++;
        }
        console.log(z);
    }
}
printSquare(5);

//Print a Square (with repeat method)
// function printSquare(x) {
//     for (var i = 0; i < x; i++){
//         console.log("#".repeat(x));
//     }
// }
// printSquare(5);