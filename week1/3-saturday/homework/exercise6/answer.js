// Print a Box (with repeat method)
function printBox(w, h) {
    for (var i = 0; i < h; i++){
        if (i === 0 || i === h-1) {
        console.log("#".repeat(w));
        }
        else{
        console.log("#" + " ".repeat(w-2)+"#");
        }
    }
}
printBox(10, 12);