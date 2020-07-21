//n times

var hello = function hi() {
    console.log("Hello, world!")
};

function callNTimes(x,y) {
    for(i = 0; i < x; i++) {
         y();
       }
    };

callNTimes(5,hello);