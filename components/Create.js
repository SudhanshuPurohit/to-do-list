import React from 'react'

const Create = (props) => {

    // The props(attribute) send by parent ( page.js) 
    const {title, desc, status, setTitle, setDesc, setStatus, ActiveTask, setTask, task, setActiveTask} = props;
    // console.log(props);

    // When task is created this function is called to make a new task and add it in the task array(state).
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


  // on updating the task
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


  return (
    <>
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
      </>   
  )
}

export default Create