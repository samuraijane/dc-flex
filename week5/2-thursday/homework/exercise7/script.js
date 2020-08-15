// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp


const sectionHeader = document.getElementById('section-header');

const section = document.getElementById('section');

const answer = document.createElement('p');
answer.innerHTML = `
  Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer
  ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit
  amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut
  odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
`;

section.appendChild(answer);

let isOpen = true;

sectionHeader.addEventListener("click", function() {
  console.log('hit');
  isOpen = !isOpen;
  if(isOpen) {
    section.appendChild(answer);
  } else {
    answer.remove();
  }
});
