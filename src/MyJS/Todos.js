import React from "react";
import TodoItem from "./TodoItem";
import {Badge} from "react-bootstrap";
import '../MyCSS/Todos.css'

const Todos=({todos,onDelete,markDone})=>{
    return (
        <div>
            {todos.length===0 ? <div className="todos">
                <h3>
                    No Todos to display! <Badge bg="secondary">New</Badge>
                </h3>
                </div>:todos.map((todo,index)=>{
                        return(
                            <TodoItem todo={todo} key={index} index={index} onDelete={onDelete} markDone={markDone}/>
                        )
            })}

        </div>
    );
};

export default Todos;