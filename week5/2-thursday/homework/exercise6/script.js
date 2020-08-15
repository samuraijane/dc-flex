//Finish the code below to make the counter increment everytime you press the button
//Also, write the listener for the decrement button so that the counter decrements when you click it
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const counter = document.getElementById('counter');

let count = 0; // This variable holds the current value of the counter!

incrementButton.addEventListener('click', function() {
  changeCount(1);
});

decrementButton.addEventListener('click', function() {
  changeCount(-1);
});

function changeCount(change) {
  count += change;
  counter.innerHTML = count;
}
