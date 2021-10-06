import React from 'react';
import './App.css';
import {SelfPrintingString} from "./components/SelfPrintingString/SelfPrintingString";

function App() {

    //      word: string
    //      seconds: number

    return (

        <div className="App">
            <SelfPrintingString seconds={0.05} word={'welcome to my page, my dear guest'}/>
        </div>
    );
}

export default App;
