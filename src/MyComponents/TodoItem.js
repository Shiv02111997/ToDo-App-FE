import React from "react";

const TodoItem=({todo,onDelete})=>{
    return (
        <>
            <h2>{todo.title}</h2>
            <h3>{todo.desc}</h3>
            <button style={{color:"red"}} onClick={()=>{onDelete(todo)}}>Delete</button>
            <div><br/></div>
        </>
    );
};

export default TodoItem;