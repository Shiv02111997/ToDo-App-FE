import React from "react";
import TodoItem from "./TodoItem";

const Todos=({todos,onDelete})=>{
    return (
        <div>
            {todos.length===0 ? "No Todos to display!":todos.map((todo)=>{
                        return(
                            <TodoItem todo={todo} key={todo.id} onDelete={onDelete}/>
                        )
            })}

        </div>
    );
};

export default Todos;