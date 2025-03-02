
const todoItem = document.getElementById('todo-item');
const addTodo = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const deleteTodoList = document.getElementById('delete-todo-list');

addTodo.addEventListener('click', () => {

    // get value of input
    const value = todoItem.value;
    console.log(value);
    if(value === "") {
        window.alert("Empty todo.")
        return
    }
    
    // <li></li>
    const todo = document.createElement('li');
    // <li>Hello</li>
    todo.innerText = value;
    
    // create delet todo button
    const deleteButton = document.createElement('button');
    deleteButton.innerText = "X";

    deleteButton.addEventListener('click',()=> {
        todo.remove();
    })
    // add delete button to todo
    todo.appendChild(deleteButton);

    // add to todo list
    todoList.appendChild(todo);

    // make input empty, reset it
    todoItem.value = ""
})

deleteTodoList.addEventListener('click', ()=> {
    console.log(todoList,todoList.hasChildNodes());
    
    while(todoList.hasChildNodes()) {
        const toRemove = todoList.lastChild.innerText;
        todoList.removeChild(todoList.lastChild)
    }
})
