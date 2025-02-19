let todoItemsContainerElement = document.getElementById("todoItemsContainer");
let addTodoButtonElement = document.getElementById("addTodoButton");

let todoList = [
  {
    text: "Learn HTML",
    uniqueNo: 1
  },
  {
    text: "Learn CSS",
    uniqueNo: 2
  },
  {
    text: "Learn Javascript",
    uniqueNo: 3
  }
];

let todoCount = todoList.length;

function onTodoStatusChange(checkboxId, labelId) {
  let checkboxElement = document.getElementById("checkboxId");
  let labelElement = document.getElementById("labelId");

  labelElement.classList.toggle("selected");
}

function onDeleteTodo(todoId) {
  let todoElement = document.getElementById("todoId");
  todoItemsContainerElement.classList.remove(todoElement);
}

function createAndAppendTodo(todo) {
  let checkboxId = "checkbox" + todo.uniqueNo;
  let labelId = "label" + todo.uniqueNo;
  let todoId = "todo" + todo.uniqueNo;

  let todoElement = document.createElement("li");
  todoElement.id = todoId;
  todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
  todoItemsContainerElement.appendChild(todoElement);

  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = checkboxId;
  inputElement.classList.add("checkbox-input");
  inputElement.onclick = function() {
    onTodoStatusChange(checkboxId, labelId)
  }
  todoElement.appendChild(inputElement);

  let labelContainerElement = document.createElement("div");
  labelContainerElement.classList.add("label-container", "d-flex", "flex-row");
  todoElement.appendChild(labelContainerElement);

  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", checkboxId);
  labelElement.textContent = todo.text;
  labelElement.id = labelId;
  labelElement.classList.add("checkbox-label");
  labelContainerElement.appendChild(labelElement);

  let deleteIconContainerElement = document.createElement("div");
  deleteIconContainerElement.classList.add("delete-icon-container");
  labelContainerElement.appendChild(deleteIconContainerElement);

  let deleteIconElement = document.createElement("i");
  deleteIconElement.classList.add("far", "fa-trash-alt", "delete-icon");
  deleteIconElement.onclick = function() {
    onDeleteTodo(todoId)
  }
  labelContainerElement.appendChild(deleteIconElement);
}

for(let todo of todoList) {
  createAndAppendTodo(todo);
}

function onAddTodo() {
  let todoUserInputElement = document.getElementById("todoUserInput");
  let inputValue = todoUserInputElement.value;

  if(inputValue === ""){
    alert("Enter a valid Text");
    return;
  }

  todoCount = todoCount + 1;

  let newTodo = {
      text: inputValue,
      uniqueNo: todoCount
    };

  createAndAppendTodo(newTodo);
  inputValue.value = "";
}

addTodoButtonElement.onclick = function() {
  onAddTodo();
}


