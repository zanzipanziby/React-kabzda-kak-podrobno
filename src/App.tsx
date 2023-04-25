import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";

import OnOff from "./components/OnOff/OnOff";
import {UncontroledAccordion} from "./components/UncontroledAccordion/UncontroledAccordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";

import UncontroledOnOff from "./components/UncontroledOnOff/UncontroledOnOff";
import {
    ControlledCheckbox,
    ControlledInput, ControlledSelect,
    GetUncontrolledInputByButtonPress,
    UncontrolledInput,
    UnControlledInputTrackValue
} from "./components/Input/Input";
import {Select} from "./components/Select/Select";
import {NewMessagesCounter, Users} from "./components/ReactMemo/ReactMemo";
import {Factorial} from "./components/UseMemo/UseMemo1";
import {HelpForReactMemo} from "./components/UseMemo/UseMemo2";
import {LikeUseCallback} from "./components/UseCallback/UseCallback";
import {UseState} from "./components/useState/UseState";
import {KeysTrackerUseEffect3, UseEffect, UseEffect2} from "./components/UseEffect/UseEffect";
import {AnalogClock, Clock} from "./components/Clock/Clock";

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [on, setOn] = useState(false)
    const [valueSelect, setValueSelect] = useState("1")


    //ReactMemo

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Dima", "Misha", "Vera", "Svetlana", "Jura"])

    return (
        <div className="App">
            <AppTitle title="AppTitle"/>
            <AppTitle title="New AppTitle"/>
            <UncontroledAccordion title={"Menu"}/>
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
            {/*<Select value={"2"}*/}
            {/*        onChange={(value) => {alert(value)}}*/}
            {/*        items={*/}
            {/*            [*/}
            {/*                {title: "Dima", value: "1"},*/}
            {/*                {title: "Misha", value: "2"},*/}
            {/*                {title: "Vera", value: "3"},*/}
            {/*                {title: "Svetlana", value: "4"},*/}
            {/*                {title: "Jura", value: "5"}*/}
            {/*            ]*/}
            {/*        }/>*/}
            <Select
                value={valueSelect}
                onChange={(value) => {
                    setValueSelect(value)
                }}
                items={
                    [
                        {title: "Dima", value: "1"},
                        {title: "Misha", value: "2"},
                        {title: "Vera", value: "3"},
                        {title: "Svetlana", value: "4"},
                        {title: "Jura", value: "5"}
                    ]
                }/>


            {/*---- ReactMemo ----*/}


            <NewMessagesCounter count={counter}/>
            <Users users={users}/>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>


            {/*------ useMemo -----*/}

            <Factorial/>

            <HelpForReactMemo/>
            <hr/>
            <LikeUseCallback/>
            <UseState/>
            <UseEffect/>
            <UseEffect2/>
            <br/>
            <Clock/>
            <br/>
            <AnalogClock/>
            <br/>
            <br/>
            <KeysTrackerUseEffect3/>
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
