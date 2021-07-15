// Selectors

const todoInput = document.getElementById("todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listeners

todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);
// filterOption.addEventListener("click",filterTodo);

// Functions

function addTodo(e){
    // Prevent Form from default
    e.preventDefault();

    // Create Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Check Mark Button 
    const completeButton = document.createElement("button");
    completeButton.classList.add("complete-btn");
    completeButton.innerHTML = '<i class="fa fa-check"></i>';
    todoDiv.appendChild(completeButton);

    // Create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    if(todoInput.value === "" || todoInput.value === null){
        alert("Please Type Correct TodoItem");
        newTodo.parentElement.style.display = "none";
    }
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // Check Trash Button
    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-btn");
    trashButton.innerHTML = '<i class="fa fa-trash-o"></i>';
    todoDiv.appendChild(trashButton);

    // Append this div to parent div
    todoList.appendChild(todoDiv);

    // Clear Input Field
    todoInput.value = "";
}

function deleteCheck(e){
    
    const item = e.target;
    // Delete Item
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function(){
            todo.remove();
        });
    }

    // Check Item
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.add("completed");
    }
}


// function filterTodo(e){
//     const todos = todoList.childNodes;
//     todos.forEach(function(todo){
//         switch(e.target.value){
//             case "all":
//                 todo.style.display = "flex";
//                 break;
//             case "completed":
//                 if(todo.classList.contains("completed")){
//                     todo.style.display = "flex";
//                 }else{
//                     todo.style.display = "none";
//                 }
//                 break;
//             case "incompleted":
//                 if(!todo.classList.contains("completed")){
//                     todo.style.display = "flex";
//                 }else{
//                     todo.style.display = "none";
//                 }
//                 break;
//         }
//     });
// }