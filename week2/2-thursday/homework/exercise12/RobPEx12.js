//Sum an array

var sum = function change(x) {
    console.log(x.reduce((a,b) => a+b, 0))
}; 

sum([1, 2, 3]);
sum([100, 20, 3]);