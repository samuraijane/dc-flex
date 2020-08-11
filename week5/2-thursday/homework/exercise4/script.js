// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"

const button = document.getElementById('myButton');

box.addEventListener('click', function() {
    const boxes = document.getElementsByClassName("box");
    for (let box of boxes) {
        box.style.background = "blue";
    }
  
});