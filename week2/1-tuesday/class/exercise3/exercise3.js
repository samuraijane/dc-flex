const binary = [0, 1, 0, 1, 1, 1, 0, 0];

function findIndex(arr){
    var lastIndex;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == 1){
            lastIndex = i;
        }
    }
    return lastIndex;
}

console.log(findIndex(binary));