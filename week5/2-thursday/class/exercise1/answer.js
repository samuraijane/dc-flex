const appDiv = document.getElementById("container");

const nav = document.createElement('nav');
nav.style.backgroundColor = "blue";
appDiv.appendChild(nav);

const h1 = document.createElement('h1');
h1.innerHTML = "HighOnCoding";
h1.style.color = "white";
nav.appendChild(h1);

const ul = document.createElement('ul');
nav.appendChild(ul);
ul.style.display = "inline-block";
ul.style.listStyleType = "none";

const li1 = document.createElement('li');
li1.innerHTML = "Home";
li1.style.color = "white";
li1.style.marginRight = "16px";
li1.style.cursor = "pointer";
ul.append(li1);

const li2 = document.createElement('li');
ul.append(li1);
const li2 = document.createElement('li');
li2.style.display = "inline-block";
li2.innerHTML = "Categories";
li2.style.color = "white";
li2.style.cursor = "pointer";
ul.append(li2);

const summary = document.createElement('div');





