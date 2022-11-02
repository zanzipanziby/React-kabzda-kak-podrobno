import React, {useState} from "react";


export const UncontroledRating = () => {
    const [value, setValue] = useState(0)
    const changeValue = (value: 1 | 2 | 3 | 4 | 5) => {
        setValue(value)
    }
    return (
        <div>
            <Star selected={value > 0} changeValue={()=>changeValue(1)}/>
            <Star selected={value > 1} changeValue={()=>changeValue(2)}/>
            <Star selected={value > 2} changeValue={()=>changeValue(3)}/>
            <Star selected={value > 3} changeValue={()=>changeValue(4)}/>
            <Star selected={value > 4} changeValue={()=>changeValue(5)}/>


        </div>
    )

}

type StarPropsType = {
    selected: boolean
    changeValue: () => void

}

const Star = (props: StarPropsType) => {
    return <span onClick={props.changeValue}>{props.selected ? <b>star </b> : "star "} </span>
}