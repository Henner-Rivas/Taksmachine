import React from "react";
import "./CreateTodoButton.css"

function CreateTodoButton(props) {
    const onClickButton=()=>{
         props.setOpenModal(prev=>!prev);
    }

    return( 
        <button className="CreateTodoButton"
        onClick={onClickButton}
        
        
        >+</button>
        )
}

export default CreateTodoButton;