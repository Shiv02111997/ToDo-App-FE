//import axios from "axios";
//import {useState} from "react";

const Axios = ({result}) => {

    return(
        <div>
            {result.map((val)=>{
            return (<li>{val}</li>);
        })}
        </div>
    )


}
export  default Axios;
