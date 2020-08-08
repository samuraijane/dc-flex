/*
    Make a Todo List
    0) Make it so that after entering the task and clicking the "Add Task" button, that new task appears inside the todo-list.
    1) Add the ability to check off tasks by clicking on them - (text-decoration:linethrough is a nice way to)
    BONUS) Add a functioning "delete" button to each task (HINT: use the keyword "this" in your delete button's click listener! Console log "this" to see what value it holds)
    SUPER BONUS) Make each task editable
*/

const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

addButton.addEventListener("click", function() {
    const task = document.getElementById('task');
    
    const listItem = document.createElement('li');
    listItem.innerHTML = `<p>${task.value}</p>`;
    listItem.style.display = "flex";
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = "Delete";
    deleteButton.setAttribute("data-delete", "delete");
    listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);
    task.value = "";
});

todoList.addEventLister("click", function(event) {
    const targetLi = event.target;
    if (targetLi.getAttribute("data-delete", "delete")) {
        const parent = targetLi.parentElement;
        console.log('need to delete');

    } else {
    targetLi.style.textDecoration= "line-through";
    }
   
});