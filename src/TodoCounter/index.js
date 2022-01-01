import React from "react";
import './TodoCounter.css';

function Todocounter({completedTodos,totalTodos}) {


    return( 
        <h2 className="TodoCounter" >Has completado {completedTodos} de {totalTodos} tareas</h2>
    )
}

export default Todocounter;