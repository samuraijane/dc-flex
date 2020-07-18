// Write a function that takes a number as an input.
// Have it create an empty array and then push a string into the array as many
// times as the input number
//
// Name the function "finalFunction"
function finalFunction(num1) {
    var catsArr = [];
    for (var i=0; i < num1; i++) {
        catsArr.push("cats") }
    return catsArr;
    }
console.log(finalFunction(16));
console.log(finalFunction(1));
console.log(finalFunction(3));
console.log(finalFunction(51));
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArray = numArray.map((i) => {
    i += 1;
    return i;
});
console.log(newArray);
console.log(numArray);