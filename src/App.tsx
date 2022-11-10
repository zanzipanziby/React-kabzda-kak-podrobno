import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {UncontroledRating} from "./components/UncontroledRating/UncontroledRating";
import OnOff from "./components/OnOff/OnOff";
import {UncontroledAccordion} from "./components/UncontroledAccordion/UncontroledAccordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff_1 from "./components/UncontroledOnOff/UncontroledOnOff";
import UncontroledOnOff from "./components/UncontroledOnOff/UncontroledOnOff";

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [on, setOn] = useState(false)
    return (
        <div className="App">
            <AppTitle title="AppTitle"/>
            <AppTitle title="New AppTitle"/>
            {/*<UncontroledAccordion title={"Menu"}/>*/}
            <OnOff on = {on} setOn = {setOn}/>
            <UncontroledOnOff setOn = {setOn}/>{on.toString()}

            <Accordion title={"Menu"} collapsed = {collapsed} setCollapsed={()=>setCollapsed(!collapsed)}/>
            {/*<Accordion title={"Users"} collapsed={false}/>*/}
            {/*<UncontroledRating/>*/}


            <Rating value={ratingValue} changeValue={setRatingValue}/>

        </div>
    );
}
type AppTitlePropsType = {
    title: string
}


const AppTitle = (props: AppTitlePropsType) => {
    return (
        <h1>{props.title}</h1>
    )
}


export default App;
