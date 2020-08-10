const appDiv = document.getElementById('container');

const nav = document.createElement('nav');
nav.style.backgroundColor = "#52a7fa";
nav.style.padding = "0 20px"
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
li1.innerHTML = "Home";
li1.style.color = "white";
li1.style.marginRight = "16px";
li1.style.cursor = "pointer";
ul.append(li1);
const li2 = document.createElement('li');
li2.style.display = "inline-block";
li2.innerHTML = "Categories";
li2.style.color = "white";
li2.style.cursor = "pointer";
ul.append(li2);

const summary = document.createElement('div');
summary.style.backgroundColor = "#ccc";
summary.style.marginTop = "14px";
summary.style.padding = "20px";
appDiv.appendChild(summary);
const summaryH1 = document.createElement('h1');
summaryH1.innerHTML = "Curse of the Current Reviews"
summary.appendChild(summaryH1);
const summaryP = document.createElement('p');
summaryP.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at tristique nisi, ac ultricies arcu. Phasellus ornare tempor aliquam. Nullam justo nisi, gravida eget quam vel, rhoncus rutrum nulla. Vivamus id fringilla libero. Nullam rhoncus maximus ullamcorper. Mauris mauris magna, dignissim sit amet sem et, vulputate ullamcorper lacus."
summary.appendChild(summaryP);


const para1 = {
  title: 'Hello WatchKit',
  paragraph: 'In porta turpis in nisl hendrerit, vitae aliquet mauris blandit. Sed a dui eget velit vehicula egestas non et sem. Etiam quam leo, vestibulum sit amet lorem eu, bibendum vehicula magna. Quisque id enim non augue tristique condimentum eu quis sapien. Ut eget sem ut metus faucibus luctus. Curabitur blandit egestas auctor.',
  comments: 12,
  likes: 124
}

const para2 = {
  title: 'Introduction to Swift',
  paragraph: 'Donec ac placerat elit. Vivamus id varius tortor. Ut vel felis sed augue fermentum feugiat. In lacinia pellentesque nisl. In hac habitasse platea dictumst. Mauris vel ipsum ac risus malesuada dictum vitae et mi. Nunc cursus vel nisi vitae eleifend.',
  comments: 15,
  likes: 45
}


renderIntro(para1);
renderIntro(para2);

function renderIntro(data) {
  const introduction = document.createElement('div');
  appDiv.appendChild(introduction);
  const introHeader = document.createElement('h2');
  introHeader.innerHTML = data.title;
  introHeader.style.color = "navy";
  introHeader.style.fontWeight = "300";
  introHeader.style.marginBottom = "4px"
  introduction.appendChild(introHeader);
  const introParagraph = document.createElement('p');
  introParagraph.innerHTML = data.paragraph;
  introParagraph.style.margin = "0 auto 4px";
  introduction.appendChild(introParagraph)

  const introLikes = document.createElement('div');
  introLikes.style.background = "orange";
  introLikes.style.padding = "8px";
  appDiv.appendChild(introLikes);

  const comments = document.createElement('span');
  comments.style.marginRight = "20px";
  comments.innerHTML = `${data.comments} comments`;
  introLikes.appendChild(comments);

  const likes = document.createElement('span');
  likes.innerHTML = `${data.likes} likes`;
  introLikes.appendChild(likes);
}