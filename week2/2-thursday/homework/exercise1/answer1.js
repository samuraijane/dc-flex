// exercise 1 //

// answer //
var someArr = [-3, 4, 9, -109, 4, -66];

var filteredArr = someArr.filter(function(element) {
    return element > 0;
});

console.log(filteredArr);