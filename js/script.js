// Seleção de elementos
const todo_form = document.querySelector("#todo-form")
const todo_input = document.querySelector("#todo-input")
const todo_list = document.querySelector("#todo-list")
const edit_form = document.querySelector("#edit-form")
const edit_input = document.querySelector("#edit-input")
const cancel_edit_btn = document.querySelector("#cancel-edit-btn")

// Funções
const saveTodo = (text) => {
    const todo = document.createElement("div")
    todo.classList.add("todo")

    const todo_title = document.createElement("h3")
    todo_title.innerText = text
    todo.appendChild(todo_title)

    const done_btn = document.createElement("button")
    done_btn.classList.add("finish-todo")
    done_btn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(done_btn)

    const edit_btn = document.createElement("button")
    edit_btn.classList.add("edit-todo")
    edit_btn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(edit_btn)

    const delete_btn = document.createElement("button")
    delete_btn.classList.add("remove-todo")
    delete_btn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(delete_btn)

    todo_list.appendChild(todo)

    todo_input.value = ""
    todo_input.focus()
}

// Eventos

todo_form.addEventListener("submit", (e) => {
    e.preventDefault()

    const input_value = todo_input.value

    if (input_value) {
        saveTodo(input_value)
    }
})


document.addEventListener("click", (e) => {
    const target_element = e.target
    const parent_element = target_element.closest("div")

    if(target_element.classList.contains("finish-todo")) {
        parent_element.classList.toggle("done")
    }

    if(target_element.classList.contains("remove-todo")) {
        parent_element.remove()
    }

    if(target_element.classList.contains("edit-todo")) {
        
    }
})