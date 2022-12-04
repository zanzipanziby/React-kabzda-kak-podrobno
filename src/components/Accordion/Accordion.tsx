import React, {useState} from "react";


type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    title: string
    collapsed: boolean
    setCollapsed: () => void
    items: Array<ItemType>
    onClick: (value: any)=> void

}


export const Accordion = (props: AccordionPropsType) => {


    return (
        <div>
            <AccordionTitle title={props.title} setCollapsed={props.setCollapsed}/>
            {props.collapsed && <AccordionBody
                items={props.items}
                onClick={props.onClick}
            />}
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


type AccordionBodyPropsType = {
    onClick: (value: any)=> void
    items: Array<ItemType>
}

const AccordionBody = (props: AccordionBodyPropsType) => {
    return (
        <ul>
            {
                props.items.map((i, index) => <li
                    key={index}
                    onClick={()=>props.onClick(i.value)}
                >
                    {i.title}
                </li>)
            }
        </ul>
    )
}