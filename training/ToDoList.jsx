import React,{useState} from 'react';

function ToDoList(){
  const [Tasks,setTasks]=useState(["eat apple","eat banana"]);
  const [newTask,setNewTask] =useState("");
  let newt="";
  function handleInput(){
      setNewTask(event.target.value);
  }
  function addTask(){
    // const newTask=document.getElementById("inputTask").value;
    setTasks(T =>[...T,newTask]);
    setNewTask("");
  }
  function deleteTask(index){
    setTasks(Tasks.filter((_,i)=>(i!==index)));
  }
  function moveTaskUp(index){
    if (index === 0) return;
    setTasks(T=>{
      const newTasks=[...T];
      [newTasks[index-1],newTasks[index]]=[newTasks[index],newTasks[index-1]];
      return newTasks;
    });
  }
  function moveTaskDown(index){
    if(index===Tasks.length) return;
    setTasks(T=>{
      const newTasks=[...T];
      [newTasks[index+1],newTasks[index]]=[newTasks[index],newTasks[index+1]];
      return newTasks;
    })
  }
  return(
    <div className="ToDoList">
      <h1>To Do List</h1>
      <div >
        <div className="taskAdding-box">
          <input type="text" onChange={handleInput} id="inputTask" placeholder="enter A Task" value={newTask} />
          <button className="add-button" onClick={addTask}>Add Task</button>
        </div>
        <ol>
          {Tasks.map((task,index)=>(<li key={index}>
            <span className="text">{task}</span>
          <button className="delte-button" onClick={()=>deleteTask(index)}>Delete</button>
          <button className="up-button" onClick={()=>moveTaskUp(index)}>Move Up</button>
          <button className="down-button" onClick={()=>moveTaskDown(index)}>Move Down</button>
          </li>))}
        </ol>
      </div>
    </div>
  );
}
export default ToDoList
//              css           // :)

// .ToDoList{
//   display:flex;
//   flex-direction:column;
//   align-items:center;
//   height: 40vh;
//   min-height:25vh;
//   justify-content:center;
//   width:50%;
//   min-width:500px;
//   margin:50px auto;
//   font-family:Arial, Helvetica, sans-serif;
//   background-color:hsla(185,50%,50%,0.8);
//   border-radius:20px;
//   box-shadow:2px 2px 5px black;
// }
// h1{
//   font-size:2.3em;
//   text-align:center;
//   border-bottom:2px solid black;
// }
// input{
//   margin-left:-10px;
//   margin-right:10px;
//   font-size:1.2em;
//   border:none;
// }
// .add-button{
//   /* margin-left:2px; */
//   font-size:1.2em;
//   width:35vw;
//   max-width:210px;
//   border:1.5px solid black;
//   cursor:pointer;
// }
// .add-button:hover{
//   color:white;
//   background-color:black;
// }
// li{
//   margin-left:-30px;
//   margin-bottom:10px;
// }
// .text{
//   display:inline-block;
//   font-size:1.2em;
//   font-weight:bold;
//   width:34vw;
//   max-width:220px;
// }
// .delte-button,.up-button,.down-button{
//   /* border:px solid black; */
//   font-weight:bold;
//   cursor:pointer;
// }
// .delte-button:hover,
// .up-button:hover,
// .down-button:hover{
//   color:white;
//   background-color:black;
// }