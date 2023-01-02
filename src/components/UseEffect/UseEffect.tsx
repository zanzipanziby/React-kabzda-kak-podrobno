import React, {useEffect, useState} from 'react';


export const UseEffect = () => {
    const [counter, setCounter] = useState(1)
    console.log('Component')

    useEffect(
        () => {
            console.log('useEffect every render');
            document.title = counter.toString()

        },
    )
    useEffect(
        () => {
            console.log('useEffect only first render');
            document.title = counter.toString()

        }, []
    )
    useEffect(
        () => {
            console.log('useEffect only counter change');
            document.title = counter.toString()

        }, [counter]
    )
    return (
        <div>
            <h1>Hello, {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    );
};

export const UseEffect2 = () => {
    // const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)


    useEffect(
        ()=> {
            setInterval(
                ()=> {
                   setCounter(counter + 1)
                }, 1000
            )
        }, []
    )



    return (
        <div>
            <h1>UseEffect2</h1>
            <span>{counter}</span>
        </div>
    )
}



