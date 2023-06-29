import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTaskPopup = ({modal, toggle, save}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }else{
            setDescription(value)
        }


    }

    const handleSave = (e) => {
        e.preventDefault()
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        save(taskObj)

    }

    return (
        <Modal isOpen={modal} toggle={toggle} style={{width: '270px'}}>
            <ModalHeader toggle={toggle}>Add Task</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">

                    <div className='image'>
            <img className='picture' src="https://wallpaperaccess.com/full/2593673.jpg"  alt="logo"/>
            </div>
            <br></br>
                        <label>Task Name</label>
                        <br></br>
                        <input type="text"  value = {taskName} onChange = {handleChange} name = "taskName"/>
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <br></br>
                        <textarea  value = {description} onChange = {handleChange} name = "description"></textarea>
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" outline size='sm' onClick={handleSave}>Add</Button>{' '}
            <Button color="danger" size='normal' onClick={toggle}>Withdraw</Button>
            </ModalFooter>
      </Modal>
    );
};

export default CreateTaskPopup;