function lvl6exercise1 (num) {
  // Return 'hello' if num is 1, 'world' if num is 2, otherwise return 'bye'
  if(num == 1) {
     return 'hello'
  } else {
    return 'bye'
  };
}
console.log(lvl6exercise1(1));
console.log(lvl6exercise1(2));
function lvl6exercise2 () {
  // Push 10 'hello' strings into the array using a for loop, then return it
  var arr = []
    for (var i =0; i < 10 ; i++) {
      arr.push('hello');
    }
    return arr; 
  }
console.log(lvl6exercise2());
function lvl6exercise3 () {
  // Empty this array using a while loop and return it
  var arr = ['hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello']
    var i=arr.length;
    while (i>= 0){
      arr.pop();
      i--;
    }
    return arr;
}
console.log(lvl6exercise3());
// this is a comment