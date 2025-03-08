const Input = document.getElementById("input-box");
const List_Container = document.getElementById("List-container");
const Removebutton = document.querySelector(".List-container li button")

function Add() {
    if (Input.value === "") {
        alert("You need to add task first");
    } else {
        let list = document.createElement("li");
        list.textContent = Input.value;
        List_Container.appendChild(list);
        const delteBtn = document.createElement("button")
        delteBtn.textContent = "Delete";
        list.appendChild(delteBtn);
        delteBtn.onclick = function(){
            list.remove();
        }
        list.onclick = function(){
            list.classList.toggle("checked")
        }
       
    };
} 




