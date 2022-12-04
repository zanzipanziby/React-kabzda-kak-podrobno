import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {UncontroledRating} from "./components/UncontroledRating/UncontroledRating";
import OnOff from "./components/OnOff/OnOff";
import {UncontroledAccordion} from "./components/UncontroledAccordion/UncontroledAccordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff_1 from "./components/UncontroledOnOff/UncontroledOnOff";
import UncontroledOnOff from "./components/UncontroledOnOff/UncontroledOnOff";
import {
    ControlledCheckbox,
    ControlledInput, ControlledSelect,
    GetUncontrolledInputByButtonPress,
    UncontrolledInput,
    UnControlledInputTrackValue
} from "./components/Input/Input";
import {Select} from "./components/Select/Select";

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [on, setOn] = useState(false)
    return (
        <div className="App">
            <AppTitle title="AppTitle"/>
            <AppTitle title="New AppTitle"/>
            {/*<UncontroledAccordion title={"Menu"}/>*/}
            <OnOff on={on} setOn={setOn}/>
            <UncontroledOnOff setOn={setOn}/>{on.toString()}

            <Accordion
                title={"Menu"}
                collapsed={collapsed}
                setCollapsed={() => setCollapsed(!collapsed)}
                items={
                    [
                        {title: "Dima", value: 1},
                        {title: "Misha", value: 2},
                        {title: "Vera", value: 3},
                        {title: "Svetlana", value: 4},
                        {title: "Jura", value: 5}
                    ]
                }
                onClick={(value) => {
                    alert(value)
                }}
            />
            {/*<Accordion title={"Users"} collapsed={false}/>*/}
            {/*<UncontroledRating/>*/}


            <Rating value={ratingValue} changeValue={setRatingValue}/>
            <UncontrolledInput/>
            <UnControlledInputTrackValue/>
            <GetUncontrolledInputByButtonPress/>

            <ControlledInput/>
            <ControlledCheckbox/>
            <ControlledSelect/>
            <Select value={"1"}
                    onChange={(value) => {alert(value)}}
                    items={
                        [
                            {title: "Dima", value: "1"},
                            {title: "Misha", value: "2"},
                            {title: "Vera", value: "3"},
                            {title: "Svetlana", value: "4"},
                            {title: "Jura", value: "5"}
                        ]
                    }/>
            <Select
                    onChange={(value) => {alert(value)}}
                    items={
                        [
                            {title: "Dima", value: "1"},
                            {title: "Misha", value: "2"},
                            {title: "Vera", value: "3"},
                            {title: "Svetlana", value: "4"},
                            {title: "Jura", value: "5"}
                        ]
                    }/>

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
