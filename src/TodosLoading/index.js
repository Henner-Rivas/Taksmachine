import React from "react";
import './TodosLoading.css'
function TodosLoading() {
    
    return (
        <div className="LoandingTodo-container"> 
         <span className="LoandingTodo-completeicon"></span>
        <p className="LoandingTodo-text">Cargano TODOs</p>
        <span className="LoandingTodo-deleteIcon"></span>
        </div>
        )
}

export default TodosLoading;