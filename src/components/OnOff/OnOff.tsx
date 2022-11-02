

//----------------------------
import React, {useState} from 'react';

const onOffStyle = {
    display: "flex",
    alignItems: "center"

}

type OnOffPropsType = {
    on: boolean
    setOn: (value: boolean) => void
}
const OnOff = (props: OnOffPropsType) => {

    const onStyle = {
        marginRight: "10px",
        border: "1px solid black",
        padding: "20px",
        backgroundColor: props.on ? "green" : ""
    }

    const offStyle = {
        marginRight: "10px",
        border: "1px solid black",
        padding: "20px",
        backgroundColor: !props.on ? "red" : ""
    }

    const inicatorStyle = {
        border: "1px solid black",
        width: "40px",
        height: "40px",
        borderRadius: "20px",
        backgroundColor: props.on ? "green" : "red"
    }


    return (
        <div style={onOffStyle}>
            <div onClick={()=>props.setOn(true)} style={onStyle}>On</div>
            <div onClick={()=>props.setOn(false)} style={offStyle}>Off</div>
            <div style={inicatorStyle}></div>
        </div>
    );
};

export default OnOff;