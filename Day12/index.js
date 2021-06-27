function addTodo(event){
    if(event.code==="Enter"){
        let todo=document.getElementById("todo-input").Value;
        if(todo){
        let listItem =`<li><span><i class"fa fa-trash"></i></span></li>`
        let container=document.getElementById("todo=container");
        container.innerHTML += listItem;
        document.getElementById("todo-input").Value="";
        }
        else{
            alert("Enter Valid Input");

        }

    }
}
document.querySelector("ul").addEventListener('click',function(event){
event.target.classList.toggle('completed');
});

document.querySelector("ul").addEventListener('click',function(event){
    if(event.target.tagName ==="I"){
        event.target.parentElement.parentElement.remove()

    }
    if(event.target.tagName ==="SPAN"){
        event.target.parentElement.remove()

    }
    });
