// Make a Todo List
// 0) Make it so that after entering the task and clicking the "Add Task" button, that new task appears inside the todo-list.
// 1) Add the ability to check off tasks by clicking on them - (text-decoration:linethrough is a nice way to)
// BONUS) Add a functioning "delete" button to each task (HINT: use the keyword "this" in your delete button's click listener! Console log "this" to see what value it holds)
// SUPER BONUS) Make each task editable

const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

addButton.addEventListener("click", function() {
  const task = document.getElementById('task');

  const listItem = document.createElement('li');
  listItem.innerHTML = `<p>${task.value}</p>`;
  listItem.style.display = "flex";
  listItem.style.justifyContent = "space-between";
  listItem.style.border = "1px solid #888";
  listItem.style.marginBottom = "20px";
  listItem.style.padding = "20px";

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = "Delete";
  deleteButton.style.height = "20px"
  deleteButton.style.alignSelf = "center";
  deleteButton.setAttribute("data-delete", "delete");
  listItem.appendChild(deleteButton);

  todoList.appendChild(listItem);
  task.value = "";
});

todoList.addEventListener("click", function(event) {
  const targetLi = event.target;
  if (targetLi.getAttribute("data-delete")) {
    const parent = targetLi.parentElement;
    parent.remove();
  } else {
    targetLi.style.textDecoration = "line-through";
  }
});
