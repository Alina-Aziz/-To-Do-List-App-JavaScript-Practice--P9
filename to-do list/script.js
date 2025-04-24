const input_box = document.getElementById("input_box");
const list_container = document.getElementById("list_container");

function addTask(){

    if(input_box.value===''){
        alert("You must writ something!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = input_box.value;
        list_container.appendChild(li);
        let span=document.createElement("span");
        //code for cross icon
        span.innerHTML="\u00d7";
        li.appendChild(span);

    }
    input_box.value="";
    saveData();
}

list_container.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", list_container.innerHTML);

}

function showList(){
    list_container.innerHTML = localStorage.getItem("data");
}

showList();