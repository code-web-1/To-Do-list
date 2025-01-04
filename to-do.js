const inputField=document.getElementById("input-field");
const listContainer=document.getElementById("list-container");

function addTask(){
    if (inputField.value === '') {
        alert("You Must Have to Write Something");
    } else {
        let li=document.createElement("li");
        li.innerText=inputField.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        saveData();
    }

    inputField.value= "";
}


listContainer.addEventListener("click",function(e){
    if (e.target.tagName ==="LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    } 
},false)

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();
