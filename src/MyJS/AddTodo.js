import React from "react";
import {useState} from "react";
import '../MyCSS/AddTodo.css'
import {Form,Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

const AddTodo =({Addtodoitem})=>{

    const[title,setTitle]= useState("");

    const handleSubmit=(e)=>{
        //console.log('are you even running!')
        e.preventDefault();
        if(!title){
            alert('Title should not be Empty!!!')
        }else{
            Addtodoitem(title);
            setTitle("");
        }
    };

    const handleChange = (e) =>{
        setTitle(e.target.value);
    };

    return (
        <Form onSubmit={handleSubmit} className="addtodo">
            <Form.Group>
                <Form.Label><b>Add Todo:</b></Form.Label>
                <Form.Control type="text" value={title} placeholder="Enter your task..." onChange={handleChange}/>
                <Form.Text className="text-muted">
                    After submit text entered above will be added to Todo List.
                </Form.Text>
            </Form.Group>
            <Button className="btn btn-success" variant="primary mb-3" type="submit">
                Submit
            </Button>
        </Form>
    );

};

export default AddTodo;