
import { useEffect, useState } from 'react'
import './App.css'
import { addTasks, deleteTasks, getTasks, updateTask } from './services/apis'


function App() {
  const [addtask, setAddtask] = useState("")
  const [tasks, SetTasks] = useState('')
 

  useEffect(() => {
    getData()
  }, [])
 
  const handleAddSubmit = async () => {
    const data = { task: addtask , progress : ' In progress' }
    const res = await addTasks(data)
    if (res.status >= 200 && res.status < 300) {
      console.log("added")
      setAddtask('')
      getData()

    } else {
      console.log("failed to add the data");
    }
  }

  const getData = async () => {
    const res = await getTasks()
    if (res.status >= 200 && res.status < 300) {
      console.log("added")
      console.log(res.data);
      SetTasks(res.data)
    } else {
      console.log("failed to load the data");
    }
  }

 

  const handleProgress=async(id)=>{
   const task = tasks.find(item=>item.id==id)
    const progress ="Completed"
    const data = {...task,progress:progress}
    const res =  await updateTask(data,id)
    if (res.status >= 200 && res.status < 300) {
      console.log("updated")
      getData()
    } else {
      console.log("failed to update");
    }
  }

  const handleDelete=async (id)=>{
    const res = await deleteTasks(id)
    if (res.status >= 200 && res.status < 300) {
      console.log("deleted")
      getData()
    } else {
      console.log("failed to delete");
    }
  }
  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7">
              <div className="card rounded-3">
                <div className="card-body p-4">

                  <h4 className="text-center my-3 pb-3">To Do App</h4>

                  <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                    <div className="col-9">
                      <div className="form-outline">
                        <input type="text" id="form1" className="form-control" placeholder='Enter a task here' value={addtask} onChange={(e) => { setAddtask(e.target.value) }} />
                      </div>
                    </div>

                    <div className="col-3">
                      <span className="btn btn-primary" onClick={handleAddSubmit}>Add</span>
                    </div>


                  </form>

                  <table className="table mb-4">
                    <thead>
                      <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Todo item</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        tasks.length > 0 ?
                          
                            tasks.map(item => (
                              <tr>
                                <th scope="row">{item.id}</th>
                                <td>{item.task}</td>
                                <td>{item.progress}</td>
                                <td>
                                  {/* <button className="btn btn-dark ms-1">
                                    <i className='fa-solid fa-pen'></i>
                                  </button> */}
                                  <button className="btn btn-success ms-1" title='completed' onClick={()=>{handleProgress(item.id)}}>
                                    <i className='fa-solid fa-check'></i>
                                  </button>
                                  <button className="btn btn-danger ms-1" onClick={()=>{handleDelete(item.id)}}>
                                    <i className='fa-solid fa-trash'></i>
                                  </button>
                                </td>
                              </tr>
                            ))
                          
                          :
                          <tr>
                            <td colSpan={4} className='text-center'>

                            <h2>No tasks yet!!!!</h2>
                            </td>
                          </tr>
                      }

                    </tbody>
                  </table>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </>
  )
}

export default App
