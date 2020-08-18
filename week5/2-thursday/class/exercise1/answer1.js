const appDiv = document.getElementById("container");

const newBanner = document.createElement('nav');
newBanner.style.backgroundColor = "#52a7fa";
newBanner.style.padding = "0 20 0 20";
newBanner.style.margin = "10px";
appDiv.appendChild(newBanner);

const newh1 = document.createElement('h1');
newh1.innerHTML = "HighOnCoding";
newh1.style.color = "#ffffff";
newh1.style.display = "inline-block";
newh1.style.marginRight = "20px";
newh1.style.fontSize = "40px";
newBanner.appendChild(newh1);

const newul = document.createElement('ul');
newul.style.listStyleType = "none";
newul.style.display = "inline-block";
newul.style.fontSize = "24px";
newBanner.appendChild(newul);

const newli = document.createElement('li');
newli.innerHTML = "Home";
newli.style.color = "#ffffff";
newli.style.marginRight = "16px";
newli.style.display = "inline-block";
newli.style.cursor = "pointer";
newul.appendChild(newli);

const newli2 = document.createElement('li');
newli2.innerHTML = "Categories";
newli2.style.color = "#ffffff";
newli2.style.display = "inline-block";
newli2.style.cursor = "pointer";
newul.appendChild(newli2);

const summary = document.createElement('div');
summary.style.backgroundColor = "#dddee0";
summary.style.margin = "20 40 0 40";
summary.style.padding = "10 20 10 20";
appDiv.appendChild(summary);

const summaryH1 = document.createElement('h1');
summaryH1.innerHTML = "Curse of the Current Reviews";
summaryH1.style.margin = "0";
summaryH1.style.color = "#53585f";
summary.appendChild(summaryH1);

const summaryP = document.createElement('p');
summaryP.innerHTML = "When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews."
summaryP.style.fontSize = "14px";
summaryP.style.fontWeight = "600";
summaryP.style.marginTop = "30px";
summary.appendChild(summaryP);

const content = {
    title: 'Hello WatchKit',
    paragraph: 'Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.',
    comments: 12,
    likes: 124
}

const content2 = {
    title: 'Introduction to Swift',
    paragraph: 'Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development buti clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.',
    comments: 15,
    likes: 45
}

renderIntro(content);
renderIntro(content2);

function renderIntro(data) {



    const introduction = document.createElement('div');
    introduction.style.margin = "0 40 0 40";
    appDiv.appendChild(introduction);
    const introHeader = document.createElement('h2');
    introHeader.innerHTML = data.title;
    introHeader.style.color = "#4286ce";
    introHeader.style.fontWeight = "300";
    introHeader.style.marginBottom = "4px";
    introduction.appendChild(introHeader);
    const introParagraph = document.createElement('p');
    introParagraph.innerHTML = data.paragraph;
    introParagraph.style.margin = "0 auto 4px";
    introduction.appendChild(introParagraph);

    const introLikes = document.createElement('div');
    introLikes.style.margin = "0 40 0 40";
    introLikes.style.backgroundColor = "#f29118";
    introLikes.style.padding = "8px";
    introLikes.style.color = "white";
    appDiv.appendChild(introLikes);

    const comments = document.createElement('span');
    comments.style.marginRight = "20px";
    comments.innerHTML = `${data.comments} comments`;
    introLikes.appendChild(comments);

    const likes = document.createElement('span');
    likes.innerHTML = `${data.likes} likes`;
    introLikes.appendChild(likes);


    

}