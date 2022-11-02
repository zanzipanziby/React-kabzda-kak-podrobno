import React, {useState} from "react";


type AccordionPropsType = {
    title: string
}


export const UncontroledAccordion = (props: AccordionPropsType) => {
    const [collapsed, setCollapsed] = useState(true)
    const changeCollapsed = () => {
        setCollapsed(!collapsed)
    }

        return (
            <div>
                <AccordionTitle title={props.title} changeCollapsed={changeCollapsed}/>
                {collapsed && <AccordionBody/>}
            </div>
        )


}


type AccordionTitlePropsType = {
    title: string
    changeCollapsed: () => void



}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3 onClick={()=>props.changeCollapsed()}>{props.title}</h3>
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