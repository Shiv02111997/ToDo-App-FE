import React from "react";
import {useState} from "react";


const AddTodo =({Addtodoitem})=>{
    const[title,setTitle]= useState("");
    const[desc,setDesc]= useState("");
    const submit=(e)=>{
        //console.log('are you even running!')
        e.preventDefault();
        if(!title || !desc ){
            alert('Either Title or Description is Empty!')
        }else{
            Addtodoitem(title,desc);
        }
    }
    return (
        <form onSubmit={submit}>
            <label>
                Title:
                <input type="text" name="title" value={title}  onChange={(event)=>{setTitle(event.target.value)}}/>
            </label>
            <br/>
            <label>
                Desc:
                <input type="text" name="desc" value={desc} onChange={(event) => {setDesc(event.target.value)}}/>
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
};

export default AddTodo;