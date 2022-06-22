import { getByTitle } from "@testing-library/react";
import React,{useEffect} from "react";
//import Context from "./contextapi/Context";
import Statewise from "./Statewise";
//import UEffect  from "./useEffect/UEffect";
import './index.css';
const App=()=>{

    
console.log(getByTitle);
    return(
        <section>
        <h1>hii welcome to React Context Api's 😊</h1>
        {/* <Context/> */}
       {/* <UEffect/> */}
    <Statewise/>

    <h1>hii its test for netlify</h1>
        </section>
    )
}

export default App