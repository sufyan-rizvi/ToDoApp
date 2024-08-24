let todo = []
btnforlist = document.getElementById("btnforlist")
inputforlist = document.getElementById("inputforlist")
divgroup = document.getElementById("divgroup")
let html =``

btnforlist.addEventListener("click", ()=>
{
    var value = inputforlist.value
    if(value !== ""){
    div = document.createElement("div")
    div.className = "shadow-lg bg-light-subtle m-1 p-2"
    div.textContent = value
    divgroup.appendChild(div)
    inputforlist.value = ""

    btndone = document.createElement("button")
    btndone.id = "done"
    btndone.textContent = "Completed"
    btndone.className = "btn btn-outline-success"
    btndone.style.float = "right"
    btndone.style.padding = "2px"
    btndone.style.marginRight = "10px"
    btndone.style.marginTop = "-2px"
    

    

    btndel = document.createElement("button")
    btndel.textContent = "Delete"
    btndel.id = "delete"
    btndel.className = "btn btn-danger"
    btndel.style.float = "right"
    btndel.style.padding = "1px"

    div.appendChild(btndel)
    div.appendChild(btndone)
    }
    else{
    alert("Please enter a Task !")}
})

divgroup.addEventListener("click", (event)=>
{
    console.log(event.target.parentElement.classList)
    if(event.target.id === "delete"){
        event.target.parentElement.remove()
    }
    if(event.target.id === "done"){
        event.target.parentElement.classList.toggle("text-decoration-line-through")
    }
})

