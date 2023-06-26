import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const CreateTask = ({modal, toggle, save}) => {

    const [activity, setActivity] = useState ('');
    const [explanation, setExplanation] = useState ('');

    const handleChange = (e) =>{
      const name = e.target.name            
      const value = e.target.value  
      
      if(name === "activity"){
        setActivity(value)
      }else{
        setExplanation(value)
      }

      
    };                                  /*OR const{name, value} =e.target */


    const handleSave = () =>{

      let activityObj = {}
      activityObj["Name"] = activity
      activityObj["Explanation"] = explanation
      save(activityObj)


    }


  return (
    <div>
      
      <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create List</ModalHeader>
            <ModalBody >

                <form >
                    <div className='form-grouping'>
                      <label>Activity</label>
                      <input type='text' className='form-control'  value ={activity} onChange={handleChange} name="activity"/>

                    </div>

                    <br></br>

                    <div className='form-grouping'>
                    <label>Explanation</label>
                      <br></br>
                      <textarea className='form-control'  value ={explanation} onChange={handleChange} name='explanation'></textarea>

                    </div>

                </form>

            </ModalBody>
            <ModalFooter>
            <Button color="primary" outline size='sm' onClick={handleSave}>Add</Button>{' '}          {/*my add button, for adding a list */}
            <Button color="danger" size='normal' outline onClick={toggle}>Withdraw</Button>        {/*my cancel button, for cancelling a list */}
            </ModalFooter>
      </Modal>

    </div>
  )
}

export default CreateTask;
