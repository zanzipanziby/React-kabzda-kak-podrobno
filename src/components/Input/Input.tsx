import React, {ChangeEvent, useRef, useState} from 'react';

export const UncontrolledInput = () => {
    return (
        <input value={'it-incubator'}/>
    );
};

export const UnControlledInputTrackValue = () => {
    const [inputValue, setInputValue] = useState("")
    return (
        <div>
            <input onChange={(e)=>{
                setInputValue(e.currentTarget.value)
            }}/>
            {inputValue}
        </div>
    )
}
export const GetUncontrolledInputByButtonPress = () => {
    const [inputValue, setInputValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        if(inputRef.current){
            setInputValue(inputRef.current.value)}
        }

    return (
        <div>
            <input ref={inputRef}/><span>actual value: {inputValue}</span>
            <div>
                <button onClick={save}>save</button>
            </div>
        </div>
    )
}




export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("")
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {setParentValue(e.currentTarget.value)}
    return (
        <div>
            <input value={parentValue} onChange={onChange}/>
        </div>
    )
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(false)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {setParentValue(e.currentTarget.checked)}
    return (
        <div>
            <input type="checkbox" checked={parentValue} onChange={onChange}/>
        </div>
    )
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {setParentValue(e.currentTarget.value)}
    return (
        <div>
            <select onChange={onChange} value={parentValue}>
                <option>none</option>
                <option value={"1"}>Minsk</option>
                <option value={"2"}>Moscow</option>
                <option value={"3"}>Kiev</option>
            </select>
        </div>
    )
}



