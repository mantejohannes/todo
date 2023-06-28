import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const EditActivityPopup = ({modal, toggle, updateActivity, activityObj}) => {

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

    useEffect(() =>{
        setActivity(activityObj.Name)
        setExplanation(activityObj.Explanation)
        

    },[])


    const handleUpdate =(e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = activity
        tempObj['Explanation'] = explanation
        updateActivity(tempObj)

    }
     

    


  return (
    <div>
      
      <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update List</ModalHeader>
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
            <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}          {/*my update button, for adding a list */}
            <Button color="danger" onClick={toggle}>Withdraw</Button>        {/*my cancel button, for cancelling a list */}
            </ModalFooter>
      </Modal>

    </div>
  )
}

export default EditActivityPopup;
