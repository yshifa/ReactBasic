import React from 'react';
import ReactDOM from 'react-dom';
import InputField from "./components/InputField";



const App = () => {
    return (
        <div>
           
            <InputField
             name="enter your name"
            type="text"
            buttonText={"click here"}
            />
            <InputField
             name="enter your password"
            type="password"
            buttonText={"click this"}
/>
        </div>
    );
};
ReactDOM.render(<App />, document.getElementById('root'));

