//import logo from './logo.svg';
import { useState} from "react";
import './App.css';
import Header from "./MyJS/Header";
import Todos from "./MyJS/Todos";
import Footer from "./MyJS/Footer";
import AddTodo from "./MyJS/AddTodo";
import data from "./MyJS/data.js";
//import Axios from "./MyJS/Axios"
//import axios from "axios";


function App() {

    const onDelete=(todo)=>{
        setTodos(todos.filter((e)=>{return e!==todo}));
    };

    const Addtodoitem = (title) =>{
        const mytodo={
            title:title,
            status:false,
        }
        setTodos([...todos, mytodo]);
    };

    const markDone=(index)=>{
            const updatedTodos=[...todos];
            updatedTodos[index].status=true;
            setTodos(updatedTodos);
    };

    const [todos, setTodos] = useState(data);




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
