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
            <button onClick={() => setCounter(counter => counter + 1)}>+</button>
        </div>
    );
};

export const UseEffect2 = () => {
    // const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)


    useEffect(
        ()=> {
            const interval = setInterval(
                ()=> {
                   setCounter(counter => counter + 1)
                }, 1000
            )
            return () => clearInterval(interval)
        }, []
    )



    return (
        <div>
            <h1>UseEffect2</h1>
            <span>{counter}</span>
        </div>
    )
}



export const UseEffect3 = () => {
    const [counter, setCounter] = useState(0)
    console.log("component rendered")
    useEffect(() => {
        console.log("effect")
    }, [])

    return (
        <div>
            <span> hello: counter {counter}</span>
            <button onClick={() => setCounter(counter => counter + 1)} >+</button>
        </div>
    )
}

export const KeysTrackerUseEffect3 = () => {
    const [text, setText] = useState('')
    const handler = (e: KeyboardEvent) => {
        setText(text => text + e.key)
    }
    console.log("component rendered")
    useEffect(() => {
        window.addEventListener('keypress', handler)

        return () => window.removeEventListener('keypress', handler)
    }, [])

    return (
        <div>
            <span> hello: counter {text}</span>
        </div>
    )
}



