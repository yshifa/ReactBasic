import React from "react";
import { directive, tsPropertySignature } from "@babel/types";
//function  getTime() {
//return new Date().toLocaleDateString();
//}
const InputField = props => {
    return (
        <div>
            <label>{props.name}</label>
            <input type={props.type} />
            <button style={{color:"red",backgroundColor:"green"}}>{props.buttonText}</button>
           
        </div>
    );
};

export default InputField