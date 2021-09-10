//import logo from './logo.svg';
import {useState} from "react";
import './App.css';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo";
import data from "./MyComponents/data.js";

function App() {

    const onDelete=(todo)=>{
        setTodos(todos.filter((e)=>{return e!==todo}))
    };

    const Addtodoitem = (title,desc) =>{
        const mytodo={
            title:title,
            desc:desc,
        }
        setTodos([...todos, mytodo]);
        //console.log(todos);
        }

    const [todos, setTodos] = useState(data);


  return (
    <div>
        <Header />
        <AddTodo Addtodoitem={Addtodoitem}/>
        <Todos todos={todos} onDelete={onDelete}/>
        <Footer />
    </div>
  );
}

export default App;
