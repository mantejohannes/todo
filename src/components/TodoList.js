import React, { useEffect, useState } from 'react';
import './Style.css';
import CreateTask from '../modals/CreateTask';


const TodoList = () => {

    const [modal, setModal] = useState(false);
    const [activityList, setActivityList] = useState([])

    useEffect(() => {
      let arr = localStorage.getItem("activityList")
      
      if(obj){
        let obj = JSON.parse(arr)
        setActivityList(obj)

      }
    


    }, [])

    const toggle = () =>{

      setModal(!modal);
    }


    const saveActivity = (activityObj) => {

      let tempList = activityList
      tempList.push(activityObj)
      localStorage.setItem("activityList", JSON.stringify(tempList))
      setActivityList(tempList)
      setModal(false)
    }

  return (
    <>

        <div className='header-list'  >
            <h3>Todo List App</h3>
            <button className='btn-1' onClick={() => setModal(true)}>Create a List</button>

        </div>
        <div className='container'>
          {activityList.map((obj) =><li>{obj.Name}</li> )}

        </div>

    <CreateTask toggle = {toggle} modal = {modal}  save= {saveActivity}/>
    </>
  )
}

export default TodoList
