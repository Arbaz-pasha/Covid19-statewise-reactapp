import React, { useEffect, useState } from "react";

const UEffect =()=>{

    const [num,setNum]=useState(0);
    const [snum,setsNum]=useState(0);

    useEffect(()=>{
        alert('iam cliked');
    },[num]);//[] array to change randomly button{component} here num is changes then effects

    useEffect(()=>{
        document.title=`you cliked me ${num} `
    })
    return(
        <>  
        <h1> hii Welcome to study on  UseEffect 👍</h1>

        <button onClick={()=>{
            setNum(num+1);
        }}>Click me {num}</button>

        <button onClick={()=>{
            setsNum(snum+1);
        }}>Click me {snum}</button>
        </>
    );
       
}

export default UEffect