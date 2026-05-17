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
    let todoUniqueId = "todo" + eachtodoItem.todoId;
    let checkboxUniqueId = "checkbox" + eachtodoItem.todoId;
    let labelUniqueId = "label" + eachtodoItem.todoId;

    let todoItem = document.createElement("li");
    todoItem.classList.add("todo-item", "d-flex", "flex-row");
    todoItem.id = todoUniqueId;
    todoListContainer.appendChild(todoItem);

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = checkboxUniqueId;
    checkbox.classList.add("todo-item-checkbox");

    checkbox.addEventListener("change", function() {
        onTodoStatusChange(checkboxUniqueId, labelUniqueId);
    });
    todoItem.appendChild(checkbox);

    let labbelElDiv = document.createElement("div");
    labbelElDiv.classList.add("todo-item-content", "d-flex", "flex-row", "align-items-center");
    todoItem.appendChild(labbelElDiv);

    let labelEl = document.createElement("label");
    labelEl.textContent = eachtodoItem.todoText;
    labelEl.setAttribute("for", checkboxUniqueId);
    labelEl.id = labelUniqueId;
    labelEl.classList.add("todo-item-label");
    labbelElDiv.appendChild(labelEl);

    let deleteBtnDiv = document.createElement("div");
    deleteBtnDiv.classList.add("ms-auto");
    labbelElDiv.appendChild(deleteBtnDiv);

    let deleteBtn = document.createElement("i");
    deleteBtn.classList.add("bi", "bi-trash", "delete-icon");
    deleteBtn.id = "delBtn";
    deleteBtnDiv.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function() {
        onTodoDelete(todoUniqueId);
    });
}

function onTodoStatusChange(checkboxUniqueId, labelUniqueId) {
    let checkboxElement = document.getElementById(checkboxUniqueId);
    let labelElement = document.getElementById(labelUniqueId);

    labelElement.classList.toggle("checked");
}

function onTodoDelete(todoUniqueId) {
    let todoListItem = document.getElementById(todoUniqueId);

    todoListContainer.removeChild(todoListItem);
}

for (let eachtodoItem of todoList) {
    createTodoItem(eachtodoItem);
}