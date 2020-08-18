// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"

const button = document.getElementById("myButton");

button.addEventListener('click', function() {
  const boxes = document.getElementsByClassName("box");
  for (let box of boxes) {
    console.log(box.style.background);
    box.style.background = "blue";
  }
});
