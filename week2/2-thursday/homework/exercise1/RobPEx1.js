var arr1 = [-3,-5,6,78,-99,100,35,44,-12]

var filteredPos = arr1.filter(function(posi){
    return posi > 0;
});

console.log(filteredPos);