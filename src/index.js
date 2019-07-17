import React from 'react';
import ReactDOM from 'react-dom';
import InputField from "./components/InputField";

const App = () => {
    return (
        <div>
            <InputField />
            <InputField />
            <InputField />
            <InputField />
            <InputField />
            <InputField />
        </div>
    );
};
ReactDOM.render(<App />, document.getElementById('root'));

