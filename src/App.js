//import logo from './logo.svg';
import {useEffect, useState} from "react";
import './App.css';
import Header from "./MyJS/Header";
import Todos from "./MyJS/Todos";
import Footer from "./MyJS/Footer";
import AddTodo from "./MyJS/AddTodo";
import axios from "axios";


function App() {

    useEffect(()=>{
        axios.get('http://localhost:8000/tasks').then(
            res => {
                console.log("Initial run. All Todos Displayed:",res.data);
                setTodos(res.data);
            }
        );
    },[])


    const onDelete=(todo)=>{
        const url='http://localhost:8000/tasks/'+todo.Id;
        axios.delete(url).then(res=>{
            setTodos(todos.filter((e)=>{return e!==todo}));
            console.log("Todo Deleted:",res.data)
        }).catch(error=>{
            console.log(error);
        });

    };

    const Addtodoitem = (title) =>{
        const mytodo={
            Task:title,
            Status:false,
        }
        const t=JSON.stringify(mytodo)
        axios.post('http://localhost:8000/tasks',t).then(res => {
            setTodos([...todos, res.data]);
            console.log("Todo Added:",todos);
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        });

    };

    const markDone=(todo,index)=>{
        const url='http://localhost:8000/tasks/'+todo.Id;
        console.log(url);
        axios.put(url).then(res => {
            console.log(res.data);
            const updatedTodos=[...todos];
            updatedTodos[index].Status=true;
            setTodos(updatedTodos);
            console.log("Todo Completed:",res.data)
        }).catch(err=>{
            console.log(err);
        });

    };

    const [todos, setTodos] = useState([]);




  return (
    <div className="app">
        <Header />
        <AddTodo Addtodoitem={Addtodoitem}/>
        <Todos todos={todos} onDelete={onDelete} markDone={markDone}/>
        <Footer />
    </div>
  );

}

export default App;
