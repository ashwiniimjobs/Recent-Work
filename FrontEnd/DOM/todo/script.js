var button=document.getElementById("enter");
var input=document.getElementById("userinput");
var ul=document.querySelector("ul");
var button=document.getElementById("delete");

function inputLength() {
    return input.value.length;
}

function createListElement(){
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";
}

function addListAfterClick(){
    if(inputLength()>0){ 
        createListElement();
    }
}

function addListAfterKeypress(event){
    if(inputLength()>0 && event.keyCode === 13){ 
        createListElement();
    }
}

function DeleteListAfterClick(){
    ul.removeChild(document.querySelector("li"));
}

button.addEventListener("click",addListAfterClick);
button.addEventListener("click",DeleteListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);