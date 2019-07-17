import React from "react";
import { directive } from "@babel/types";
const InputField = () => {
    return (
        <div>
            <label>Enter your name:</label>
            <input type="text" />
            <button style={{color:"red",backgroundColor:"green"}}>submit</button>
        </div>
    );
};

export default InputField