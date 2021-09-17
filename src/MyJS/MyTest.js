import React from "react";
import {useState} from "react";
import {Form,Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import './MyTest.css'

const MyTest =({Addtodoitem})=>{

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
        <Form onSubmit={handleSubmit} className="mytest">
            <Form.Group>
                <Form.Label><b>Add Todo:</b></Form.Label>
                <Form.Control type="text" value={title} placeholder="Enter your task..." onChange={handleChange}/>
                <Form.Text className="text-muted">
                    Text entered above will be added to Todo List.
                </Form.Text>
            </Form.Group>
            <Button variant="primary mb-3" type="submit">
                Submit
            </Button>
        </Form>
    );

};

export default MyTest;