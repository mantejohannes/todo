import React, { useState } from "react";
import EditActivity from "../modals/EditActivity";

const Card = ({activityObj, index, deleteActivity, updateListArray}) => {

    const [modal, setModal] = useState(false);

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateActivity = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {

            deleteActivity(index)
    }

    return(

        <div className = "card-wrapper mr-5">
            <div className = "card-top" style={{"background-color": colors[index%5].primaryColor}}></div>
            <div className = "task-holder">
                <span className = "card-header" style={{"background-color": colors[index%5].secondaryColor, "border-radius": "10px"}}>{activityObj.Name}</span>
                <p className="explanation-class">{activityObj.Explanation}</p>

                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <i className = "far fa-edit mr-3" style={{"color" : colors[index%5].primaryColor,  "cursor" : "pointer"}} onclick ={() => setModal(true)}></i>
                    <i className="fas fa-trash-alt" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick={handleDelete}></i>
                </div>
            </div>
            <EditActivity modal = {modal} toggle = {toggle} updateActivity = {updateActivity} activityObj={activityObj}/>
        </div>
    );





};

export default Card;