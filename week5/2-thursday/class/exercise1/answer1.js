const appDiv = document.getElementById('container');

const nav = document.createElement('nav');
nav.style.backgroundColor = "52a7fa";

appDiv.appendChild(nav);

const h1 = document.createElement('h1');
h1.innerHTML = "HighOnCoding";
h1.style.color = "white";
h1.style.display = "inline-block";
nav.appendChild(h1);

const ul = document.createElement('ul');

nav.appendChild(ul);
ul.style.display = "inline-block";
ul.style.listStyleType = "none";

const li1 = document.createElement('li');
li1.style.display = "inline-block";
li1.innerHTML = "Home"
li1.style.color = "white";
li1.style.marginRight ="16px";
ul.append(li1);

const li2 = document.createElement('li');
li2.style.display = "inline-block";
li2.innerHTML = "Catergories"
li2.style.color = "white";
li2.style.marginRight ="16px";
ul.append(li2);
//

const summary = document.createElement('div');
summary.style.backgroundColor = "#ccc";
summary.style.padding = "20px";
appDiv.appendChild(summary);
const summaryH1 = document.createElement('h1');
summaryH1.innerHTML = "Curse of the Current Reviews";
summary.appendChild(summaryH1);
const summaryP = document.createElement('p');
summaryP.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus viverra nibh et lobortis. In pellentesque quis mi ac varius. Vivamus fringilla placerat ligula id pulvinar. Quisque ultricies blandit accumsan. Sed eu orci sed sem bibendum mollis. Nulla auctor leo vitae eros consequat luctus. Duis viverra sed ipsum tempus pulvinar. Donec facilisis venenatis erat vitae ultricies. Fusce aliquet feugiat mi. Vivamus a feugiat ipsum. Cras feugiat urna at dolor aliquet porta. Curabitur ultrices faucibus urna sit amet blandit. Etiam ac turpis vitae mauris faucibus bibendum nec id sapien. Vestibulum vel turpis nec lorem volutpat feugiat sed ut tellus.";
summary.appendChild(summaryP);

// 

const introduction = document.createElement('div');
appDiv.appendChild(introduction);

const introH = document.createElement('h2');
introH.innerHTML = " Hello WatchKit";
introH.style.fontWeight = "300";
introH.style.color = "navyblue";

introduction.appendChild(introH);

const introP = document.createElement('p');
introP.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus viverra nibh et lobortis. In pellentesque quis mi ac varius. Vivamus fringilla placerat ligula id pulvinar. Quisque ultricies blandit accumsan. Sed eu orci sed sem bibendum mollis. Nulla auctor leo vitae eros consequat luctus. Duis viverra sed ipsum tempus pulvinar. Donec facilisis venenatis erat vitae ultricies. Fusce aliquet feugiat mi. Vivamus a feugiat ipsum. Cras feugiat urna at dolor aliquet porta. Curabitur ultrices faucibus urna sit amet blandit. Etiam ac turpis vitae mauris faucibus bibendum nec id sapien. Vestibulum vel turpis nec lorem volutpat feugiat sed ut tellus.";
introP.style.marginTop = "0";
introduction.appendChild(introP);

//

const comsec = document.createElement('div');
comsec.style.background = "orange";
comsec.style.padding = "8px";
appDiv.appendChild(comsec);

const comments = document.createElement('span');
comments.innerHTML = " 15 Comments";
comments.style.fontWeight = "300";
comments.style.color = "navyblue";
comsec.appendChild(comments);

const likes= document.createElement('span');
likes.innerHTML = "10 Likes";
likes.style.fontWeight = "300";
likes.style.color = "navyblue";
comsec.appendChild(likes);