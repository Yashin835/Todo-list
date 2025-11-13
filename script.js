const taskInput = document.querySelector("#taskInput");
const addButton = document.querySelector("#Add");
const taskList = document.querySelector("#Task-List");

addButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim(); 

  if (taskText === "") return; 

  createTask(taskText); 
  taskInput.value = ""; 
});
function createTask(text) {
  const li = document.createElement("li"); 
  li.innerText = text; 

  const deleteButton = document.createElement("button"); 
  deleteButton.innerText = "DELETE";

  li.appendChild(deleteButton);
  taskList.appendChild(li);

  li.addEventListener("click", () => {
    li.classList.toggle("checked");
  });

  deleteButton.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
  });
}

