console.log ("Test");
let id=1; 

function getTodoItems ()
{ 
    fetch(`api/TodoItems`)
    .then(data=>data.json())
    .then(res=>res.map((eachItem)=>{
        console.log(res)
        let div_el= document.getElementById('todolist')
        let newDiv= document.createElement("div")
        newDiv.innerHTML= `<div> 
        <h2>${eachItem.id}.${eachItem.name} </h2> 
        <h3>Complete: ${eachItem.isComplete}</h3>
        <h3></h3> <br> </div>`
        
 div_el.append(newDiv)
    }));


};
   
getTodoItems();