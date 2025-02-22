const form = document.querySelector('#form');
const input = document.querySelector('#input');
const todosUL = document.querySelector('#todos');

const todos = JSON.parse(localStorage.getItem("todos"));

if(todos){
    todos.forEach((todo)=>{
        addToDo(todo);
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    addToDo();
});

function addToDo(todo){
    let todoText = input.value; 

    if(todo){
        todoText = todo.text;
    }
    if(todoText){
        const todoEl = document.createElement("li");   // Create a new <li> element.

        if(todo && todo.completed){
            todoEl.classList.add("completed")
        }

        todoEl.innerText = todoText;    // Set the text inside the <li>.

    todoEl.addEventListener("click",() => {
        todoEl.classList.toggle("completed");
        updateLS();            // Save the updated status in localStorage
    });

    todoEl.addEventListener("contextmenu",(e)=>{
        e.preventDefault();
        todoEl.remove();
        updateLS();
    });

    todosUL.appendChild(todoEl);  // add the new <li> to the list

    input.value = "";            

    updateLS();
    }
}
function updateLS() {
    const todosEl = document.querySelectorAll("li"); // Select all <li> elements.

    const todos = []; // Create an empty array.

    todosEl.forEach((todoEl) => {
        todos.push({
            text: todoEl.innerText, // Get the text inside the <li>.
            completed: todoEl.classList.contains("completed"), // Check if it has the "completed" class.
        });
    });

    localStorage.setItem("todos", JSON.stringify(todos)); // Save the array as a JSON string in localStorage.
}

