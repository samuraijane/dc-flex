//  3 times
function call3Times(fun) {
    function fun() {
      console.log("Hello World!");
    }
    fun();
    fun();
    fun();
  }
  
  console.log(call3Times());