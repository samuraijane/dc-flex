
const containerDiv = document.getElementById('container');
const nav = document.createElement("nav");
const h1 = document.createElement("h1");
h1.innerHTML = "HighCoding";
h1.style.color = "white";
containerDiv.appendChild(nav);
nav.appendChild(h1);
var newDiv = document.createElement("div");

nav.style.backgroundColor = "lightblue"
nav.style.height = "100px";
nav.style.padding = "20px";


const ul = document.createElement("ul");
const li = document.createElement("li");
nav.appendChild(ul);
li.innerHTML = "Home";
ul.appendChild(li);

li.style.color = "white";







