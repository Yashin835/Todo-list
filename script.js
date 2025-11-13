const taskInput = document.querySelector("#taskInput");
const addButton = document.querySelector("#Add");
const taskList = document.querySelector("#Task-List");

addButton.addEventListener("click", () => {
    let Tasktext = taskInput.value.trim()
    if (Tasktext === "") {
        return
    }
    createTask(Tasktext)
    taskInput.value = "";
})

function createTask(text) {
    let li = document.createElement("li")
    let button = document.createElement("button")
    taskList.appendChild(li).innerText = text
    li.appendChild(button).innerText = "DELETE"
    li.addEventListener("click", () => {

        li.classList.toggle("checked")

    })

    button.addEventListener("click", () => {
        li.remove()
    })


}

