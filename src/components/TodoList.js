import React, { useEffect, useState } from 'react';
import './Style.css';
import CreateTask from '../modals/CreateTask';
import Card from './Card';

const TodoList = () => {

    const [modal, setModal] = useState(false);
    const [activityList, setActivityList] = useState([])



    
    useEffect(() => {
      let arr = localStorage.getItem("activityList")
      
      if(arr){
        let obj = JSON.parse(arr)
        setActivityList(obj)

      }
  
    }, [])

    const deleteActivity = (index) => {
      let tempList = activityList
      tempList.splice(index, 1)
      localStorage.setItem("activityList", JSON.stringify(tempList))
      setActivityList(tempList)
      window.location.reload()

    }

    const updateListArray = (obj, index) => {

      let tempList = activityList
      tempList[index] = obj
      localStorage.setItem("activityList", JSON.stringify(tempList))

      setActivityList(tempList)
      window.location.reload()

    }


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
        <div className='task-container'>
          {activityList && activityList.map((obj, index) => <Card activityObj = {obj} index = {index} deleteActivity={deleteActivity} updateListArray={updateListArray}/> )}

        </div>

    <CreateTask toggle = {toggle} modal = {modal}  save= {saveActivity}/>
    </>
  )
}

export default TodoList
