Bonus: forEach

Implement your own custom `forEach` function which takes two arguments– an array `arr` and a function `fn`. It will call `fn` passing each item in `arr` to `fn` as the first argument. For example:
```
var arr = [
  {
    name: "Bob"
  },
  {
    name: "Alice"
  },
  {
    name: "Joe"
  }
];

forEach(arr, function(person) {
  console.log('Hello, ' + person.name + '!');
});
```
The above program will print:
```
Hello, Bob!
Hello, Alice!
Hello, Joe!
```
