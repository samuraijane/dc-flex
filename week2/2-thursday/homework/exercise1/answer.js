// Positive Numbers
var someArr = [-3, 4, 9, -109, 4, -66];

var filteredArr = someArr.filter(function(el) {
    return el > 0;
});

console.log(filteredArr);