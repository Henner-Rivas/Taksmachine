import React from 'react';
import './TodoItem.css';
import { BsTrash } from "react-icons/bs";
import { BsCheckSquareFill } from "react-icons/bs";

function TodoItem(props) {


  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        <BsCheckSquareFill />
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        <BsTrash/>
      </span>
    </li>
  );
}
export default TodoItem ;
