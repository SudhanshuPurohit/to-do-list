"use client"

import React, { useState } from 'react';
import { toast } from 'react-toastify';

const page = () => {
  // This are called states.
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState("due");
  const [task, setTask] = useState([]);
  // const [updateAdd, setUpdateAdd] = useState("Add");
  const [ActiveTask , setActiveTask] = useState(null);
  
  // When task is created this functin is called to make a new task and add it in the task array(state).
  var submitHandler = (e)=>{
    e.preventDefault();

    if(title.length < 5 || desc.length <15){
      console.log(title.length , desc.length);
      toast.error("The Title and Description must be the length of 5 and 15 atleast respectively");
      return;
    }

    var newTask = {
      title,
      desc,
      status,
      date: new Date().toLocaleDateString(),
    }

    console.log(newTask);
    
    // const newTaskarr = [...task];
    // newTaskarr.push(newTask);
    // setTask(newTask);
    // instead of above three line use
    // copy using the derefernce operator and add newTask at last of it, and put it in task state using setTask.
    setTask([...task, newTask]);
    
    
    // Make  form  empty
    setDesc("");
    setStatus("due");
    setTitle("");

    // console.log(newTask)
  }

  // To show case the task in form of cards.

  let taskList = <h4 className='text-center'>No Task To Show</h4>;

    if(task.length>0){
    taskList = task.map((item, index)=> {
      return   (   <div key = {index} className="card  mb-3 w-100" >
      <div className="card-body">
          <h5 className="card-title">{item.title}</h5>

          <p className="card-text">
             {item.desc}

          </p>
          <button onClick={()=> updateHandler(index)} className="me-2 btn btn-sm   btn-dark">
              Update Task
          </button>
          <button onClick={()=>deleteTask(index)} className="btn btn-sm btn-dark">
              Delete Task
          </button>
      </div>
  </div>);
    })
    }


    // Delete the Task:-

    let deleteTask = (index)=> {
      // const copyTask = [...task];
      // copyTask.splice(index, 1);
      // setTask(copyTask);

      // Instead of above line write:
      setTask(task.filter((e,i)=> i!==index));


    }

    let updateHandler = (index)=>{
      setActiveTask(index);
      const {title, desc, status} = task[index];

      setTitle(title);
      setDesc(desc);
      setStatus(status);

    }

    let updateTask = ( event)=>{
      
      event.preventDefault();
      let index = ActiveTask;
      let copyTask = [...task];
      copyTask[index] = {...copyTask[index], title, desc, status};
      setTask(copyTask);
      setActiveTask(null);
      setTitle("")
      setDesc("")
      setStatus("")
    }

  

  // var titleHandler = (e)=>{
  //   console.log(e.target.value);
  //   setTitle(e.target.value);
  // }

//   var statusfun = (e)=>{
//     setStatus(e.target.value);
//      
//   }

// react toastify



  
  return (
    <>
    <h3 className='text-center mt-3'>TO-DO App</h3>
    <div className="container p-5">
      <h4>Add Task</h4>
      <form onSubmit={submitHandler} className=" d-flex-column align-items-center">
        <input type="text" className="form-control mb-3" placeholder='Title' name='title' value={title} onChange={(e)=> setTitle(e.target.value)} />
      
        <input name="description" className="form-control mb-3"  placeholder='Description' value={desc} onChange={(e)=>setDesc(e.target.value)}></input>
      
        <select name="status" className="form-select mb-3 dark" aria-label="Default select example" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="due">Due</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      
        

        {(ActiveTask === null ?<button className="btn btn-dark"  onClick={submitHandler}> Add Task </button>: <button className="btn btn-dark" onClick={updateTask}> Update</button> )}

      </form>

      <br/>
      <br/>
      
      <h4>Pending Tasks</h4>
            <div className="d-flex flex-column flex-wrap">
            {taskList} 
            </div>
            {/* {JSON.stringify(task)} */}
    </div>
    </>
  )
}

export default page;