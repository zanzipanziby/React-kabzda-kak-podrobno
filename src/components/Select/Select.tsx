import React, {useState, KeyboardEvent} from 'react';
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: Array<ItemType>
}
// RETURN VIDEO ------ 12:00
export const Select = (props: SelectPropsType) => {


    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)
    const onItemClick = (value: string) => {
        props.onChange(value)
        setActive(!active)
    }
    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)
    // const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    //     for (let i = 0; i< props.items.length; i++) {
    //         if(props.items[i].value === hoveredElementValue){
    //             setHoveredElementValue(props.items[i + 1])
    //             break
    //         }
    //     }
    //
    // }


    return (
        <div className={s.select + ' ' + (active ? s.active : '')}
             tabIndex={0}
        >
            <h3 onClick={() => {
                setActive(!active)
            }}>{selectedItem && selectedItem.title}</h3>
            <div className={s.items}>
                {props.items.map(i => <div
                    onMouseEnter={() => setHoveredElementValue(i.value)}
                    className={s.item + ' ' + (hoveredItem === i ? s.selected : '')}
                    key={i.value}
                    onClick={() => onItemClick(i.value)}
                >
                    {i.title}
                </div>)}
            </div>
        </div>
    );
};

