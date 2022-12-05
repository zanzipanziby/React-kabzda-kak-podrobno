import React, {useReducer} from "react";


type AccordionPropsType = {
    title: string
}

type ActionType = {
    type: string
}

export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType ): StateType => {

    switch (action.type){
        case 'CHANGE_COLLAPSED':

            return {...state, collapsed:!state.collapsed}
        default: return state
    }
}


export const UncontroledAccordion = (props: AccordionPropsType) => {
    // const [collapsed, setCollapsed] = useState(true)
    const [state, dispatchCollapsed] = useReducer(reducer,{collapsed: false})
    const changeCollapsed = () => {
        // setCollapsed(!collapsed)
        let action:ActionType = {type: 'CHANGE_COLLAPSED'}
        dispatchCollapsed(action)
    }

        return (
            <div>
                <AccordionTitle title={props.title} changeCollapsed={changeCollapsed}/>
                {state.collapsed && <AccordionBody/>}
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