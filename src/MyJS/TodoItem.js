import React from "react";
import '../MyCSS/TodoItem.css'
//import {Card} from "react-bootstrap";
//import {Button} from "bootstrap";

const TodoItem=({todo,index,onDelete,markDone})=>{

    return (
        <div className="todoitem">
            <h4 className="mb-lg-3" style={{textDecoration: todo.Status ? "line-through":""}}>{todo.Task}</h4>
            <button className="btn btn-success btn-sm" onClick={()=>{markDone(todo,index)}}>Mark Completed</button> {' '}
            <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(todo)}}>Delete</button>
            <div><br/></div>
        </div>
    );
};

export default TodoItem;