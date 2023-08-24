import React from 'react'

const Show = (props) => {

    // The props(attribute) send by parent ( page.js) 
    const { setTitle,setDesc, setStatus ,setTask, task, setActiveTask } = props;
    // console.log(props);

    // Delete the Task:-

    let deleteTask = (index) => {
        // const copyTask = [...task];
        // copyTask.splice(index, 1);
        // setTask(copyTask);

        // Instead of above line write:
        setTask(task.filter((e, i) => i !== index));

    }

    let updateHandler = (index) => {
        setActiveTask(index);
        const { title, desc, status } = task[index];
    
        setTitle(title);
        setDesc(desc);
        setStatus(status);
    
      }
    

    // To show case the task in form of cards.

    let taskList = <h4 className='text-center'>No Task To Show</h4>;

    if (task.length > 0) {
        taskList = task.map((item, index) => {
            return (<div key={index} className="card  mb-3 w-100" >
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>

                    <p className="card-text">
                        {item.desc}

                    </p>
                    <button onClick={() => updateHandler(index)} className="me-2 btn btn-sm   btn-dark">
                        Update Task
                    </button>
                    <button onClick={() => deleteTask(index)} className="btn btn-sm btn-dark">
                        Delete Task
                    </button>
                </div>
            </div>);
        })
    }
    return (
        <div className="d-flex flex-column flex-wrap">
            {taskList}
        </div>

    )
}

export default Show