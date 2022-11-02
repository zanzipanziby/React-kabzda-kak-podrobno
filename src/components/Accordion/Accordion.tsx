
import React, {useState} from "react";


type AccordionPropsType = {
    title: string
    collapsed: boolean
    setCollapsed: ()=>void
}


export const Accordion = (props: AccordionPropsType) => {


    return (
        <div>
            <AccordionTitle title={props.title} setCollapsed={props.setCollapsed}/>
            {props.collapsed && <AccordionBody/>}
        </div>
    )


}


type AccordionTitlePropsType = {
    title: string
    setCollapsed: () => void



}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3 onClick={props.setCollapsed}>{props.title}</h3>
    )
}
const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    )
}