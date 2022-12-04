import React, {useRef, useState} from 'react';

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



