const appDiv = document.getElementById("container");
appDiv.style = "font-family: Arial, Helvetica, Serif"

const nav = document.createElement("nav");
nav.style = "background: skyblue; display: flex; justify-content: space-between; align-items: center";

const h1 = document.createElement("h1");
h1.innerHTML = "HighOnCoding";
h1.style = "color: white; padding: 10px";

const ul = document.createElement("ul");

const li1 = document.createElement("li");
li1.innerHTML = "Home";
li1.style = "color: white; display: inline; padding: 10px";

const li2 = document.createElement("li");
li2.innerHTML = "Categories";
li2.style = "color: white; display: inline; padding: 10px";

appDiv.appendChild(nav);
nav.appendChild(h1);
nav.appendChild(ul);
ul.appendChild(li1);
ul.appendChild(li2);

const callOut = document.createElement("div");
callOut.style = "background: lightgray; margin: 10px;";

const h2 = document.createElement("h2");
h2.innerHTML = "Curse of the Current Reviews";
h2.style = "color: gray; padding: 10px"

const p = document.createElement("p");
p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
p.style = "font-size: 12px; padding: 10px";

appDiv.appendChild(callOut);
callOut.appendChild(h2);
callOut.appendChild(p);

const para1 = {
  title: "Hello WatchKit",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam nulla facilisi cras fermentum. Vestibulum lectus mauris ultrices eros. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Congue eu consequat ac felis donec et odio pellentesque diam. Phasellus egestas tellus rutrum tellus. Tincidunt tortor aliquam nulla facilisi. Augue lacus viverra vitae congue eu consequat ac felis. Eu sem integer vitae justo eget magna.",
  comments: 12,
  likes: 124
};

const para2 = {
  title: "Introduction to Swift",
  content: "Phasellus egestas tellus rutrum tellus. Tincidunt tortor aliquam nulla facilisi. Augue lacus viverra vitae congue eu consequat ac felis. Eu sem integer vitae justo eget magna.",
  comments: 15,
  likes: 45
}

function renderPost(data) {

const post = document.createElement("div");

const title = document.createElement("h3");
title.innerHTML = data.title;
title.style = "color: blue; font-weight: normal; margin: 0 10px; padding-top: 10px"

const content = document.createElement("p");
content.innerHTML = data.content;
content.style = "margin: 0 10px; padding-top: 10px"

const commentBar = document.createElement("div");
commentBar.style = "margin-top: 0; background: orange; display: flex; margin: 0 10px 10px 0";

const commentBarUL = document.createElement("ul");
commentBarUL.style = "margin: 5px; padding: 0"

const comments = document.createElement("li");
comments.innerHTML = `${data.comments} comments`;
comments.style = "color: white; display: inline; padding-right: 10px"

const likes = document.createElement("li");
likes.innerHTML =`${data.likes} likes`;
likes.style = "color: white; display: inline; padding-left: 10px"

appDiv.appendChild(post);
post.appendChild(title);
post.appendChild(content);
post.appendChild(commentBar);
commentBar.appendChild(commentBarUL);
commentBarUL.append(comments);
commentBarUL.append(likes);
};

renderPost(para1);
renderPost(para2);



