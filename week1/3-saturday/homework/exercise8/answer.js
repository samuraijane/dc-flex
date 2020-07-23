// // Factor a Number
function factors(num) {
    var numarr = [];
    for (i = 1; i <= num ; i++) {
        if (num % i === 0) {
            numarr.push(i);
        }
    }
    console.log(numarr);
}
factors(122);