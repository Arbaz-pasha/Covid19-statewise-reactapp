import React, { createContext } from "react";
import CompA from "./CompA";

const FirstName= createContext();
const LastName= createContext();

const Context=()=>{
    return (
        <>
        <FirstName.Provider value={"Arbaz"}>
        <LastName.Provider value={" Pasha"}>
        <CompA/>
        </LastName.Provider>
         </FirstName.Provider>
       
        </>
   );
}
export default Context
export {FirstName,LastName}
