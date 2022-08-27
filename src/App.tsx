import React from 'react';
import './App.css';

function App() {
    debugger;
  return (
    <div className="App">
     Hello, samurai! Let's go!
        <Rating />
        <Accocdion />
    </div>
  );
}


function Rating(){
    debugger;
    return(
        <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>
    )
}

function Star() {
    return (
        <div>Star</div>
    )
}



function Accocdion(){
    debugger;
    return(
        <div>
            <h3>Menu</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default App;
