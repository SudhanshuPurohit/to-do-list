"use client"
import React, { useState } from 'react';
import Create from "@/components/Create";
import { toast } from 'react-toastify';
import Show from '@/components/Show';

const page = () => {
  // This are called states.
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState("due");
  const [task, setTask] = useState([]);
  // const [updateAdd, setUpdateAdd] = useState("Add"); // I am trying this method in push1 github to update task
  const [ActiveTask, setActiveTask] = useState(null); // sir method to update task push2 


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

        <Create
          title={title}
          desc={desc}
          status={status}
          setTitle={setTitle}
          setDesc={setDesc}
          setStatus={setStatus}
          ActiveTask={ActiveTask}
          setActiveTask= {setActiveTask}
          setTask={setTask}
          task={task}
        />
        {/* or <Create></Create> */}
        {/* Pass attribute which are called props  */}

        <br />
        <br />

        <h4>Pending Tasks</h4>
        <Show
         setTitle={setTitle}
         setDesc={setDesc}
         setStatus={setStatus}
         setActiveTask = {setActiveTask}
         setTask={setTask}
         task={task}
        ></Show>

        {/* {JSON.stringify(task)} */}
      </div>
    </>
  )
}

export default page;


link 
next/link