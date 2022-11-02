import React, {useState} from "react";
import {Simulate} from "react-dom/test-utils";
;


type RatingPropsType = {
    value: RatingValueType
    changeValue: (value: RatingValueType)=> void
}
export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5
export const Rating = (props: RatingPropsType) => {

    return (
        <div>
            <Star selected={props.value > 0} changeValue = {()=>props.changeValue(1)}/>
            <Star selected={props.value > 1} changeValue = {()=>props.changeValue(2)}/>
            <Star selected={props.value > 2} changeValue = {()=>props.changeValue(3)}/>
            <Star selected={props.value > 3} changeValue = {()=>props.changeValue(4)}/>
            <Star selected={props.value > 4} changeValue = {()=>props.changeValue(5)}/>
        </div>
    )

}

type StarPropsType = {
    selected: boolean
    changeValue: () => void

}

const Star = (props: StarPropsType) => {
    return <span onClick={props.changeValue}>{props.selected ? <b>star </b> : "star "}</span>
}