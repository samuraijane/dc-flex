// n times
var hello = function hi() {
    console.log("Hello, world!")
  };
  
  function callNTimes(x, y) {
    for (i = 0; i < x; i++) {
        y();
    }
  };
  console.log(callNTimes(5, hello));