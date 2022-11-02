import React, {useState} from 'react';

const onOffStyle = {
    display: "flex",
    alignItems: "center"

}

type UncontroledOnOffPropsType = {
    setOn:(value: boolean) => void
}
const UncontroledOnOff = (props: UncontroledOnOffPropsType) => {
    const [on, setOn] = useState(false)
    // props.onOffValue = on
    const onStyle = {
        marginRight: "10px",
        border: "1px solid black",
        padding: "20px",
        backgroundColor: on ? "green" : ""
    }

    const offStyle = {
        marginRight: "10px",
        border: "1px solid black",
        padding: "20px",
        backgroundColor: !on ? "red" : ""
    }

    const inicatorStyle = {
        border: "1px solid black",
        width: "40px",
        height: "40px",
        borderRadius: "20px",
        backgroundColor: on ? "green" : "red"
    }

    const onHandler = () => {
        setOn(true)
        props.setOn(true)

    }
    const offHandler = () => {
        setOn(false)
        props.setOn(false)
    }
    return (
        <div style={onOffStyle}>
            <div onClick={onHandler} style={onStyle}>On</div>
            <div onClick={offHandler} style={offStyle}>Off</div>
            <div style={inicatorStyle}></div>
        </div>
    );
};

export default UncontroledOnOff;
