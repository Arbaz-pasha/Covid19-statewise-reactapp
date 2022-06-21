import React, { useContext } from "react";
import CompB from "./CompB";
import { FirstName, LastName } from "./Context";

const CompA=()=>{

    const fname=useContext(FirstName);
    const lname = useContext(LastName);

return (
    <>
    <CompB/>
    <h1> hii this is useContext() 😆 FirstName is {fname}    and       LastName is {lname} 😆</h1>
   </>
);

}
export default CompA
