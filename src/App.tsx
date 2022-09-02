import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";

function App() {
    //debugger;
    return (
        <div className="App">
            <Page title="Hello, samurai! Let's go!"/>
            <Page title="My friends"/>
            <Rating value={5}/>
            <Accordion titleValue="menu" collapsed={true}/>
            <Accordion titleValue="contacts" collapsed={false}/>
            <Rating value={4}/>
            <Rating value={3}/>
            <Rating value={2}/>
            <Rating value={1}/>
            <Rating value={0}/>

        </div>
    );
}

type PagePropsType = {
    title: string;
}

function Page(props: PagePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}


export default App;


