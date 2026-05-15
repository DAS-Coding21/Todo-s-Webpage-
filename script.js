let todoListContainer = document.getElementById("todoListContainer");


let todoList = [
    {
        todoText: "HTML",
        todoId: 1,
    },
    {
        todoText: "CSS",
        todoId: 2,
    },
    {
        todoText: "JavaScript",
        todoId: 3,
    },
];

    
function createTodoItem(eachtodoItem) {
    let todoItem = document.createElement("li");
    todoItem.classList.add("todo-item", "d-flex", "flex-row");
    todoListContainer.appendChild(todoItem);

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "todo" + eachtodoItem.todoId;
    checkbox.classList.add("todo-item-checkbox");
    todoItem.appendChild(checkbox);

    let labbelElDiv = document.createElement("div");
    labbelElDiv.classList.add("todo-item-content", "d-flex", "flex-row", "align-items-center");
    todoItem.appendChild(labbelElDiv);

    let labelEl = document.createElement("label");
    labelEl.textContent = eachtodoItem.todoText;
    labelEl.setAttribute("for", "todo" + eachtodoItem.todoId);
    labelEl.classList.add("todo-item-label");
    labbelElDiv.appendChild(labelEl);

    let deleteBtnDiv = document.createElement("div");
    deleteBtnDiv.classList.add("ms-auto");
    labbelElDiv.appendChild(deleteBtnDiv);

    let deleteBtn = document.createElement("i");
    deleteBtn.classList.add("bi", "bi-trash", "delete-icon");
    deleteBtnDiv.appendChild(deleteBtn);
}



for (let eachtodoItem of todoList) {
    createTodoItem(eachtodoItem);
}