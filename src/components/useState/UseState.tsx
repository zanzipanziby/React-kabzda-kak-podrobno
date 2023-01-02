import React, {useState} from 'react';

const UseState = () => {
    function generateData() {
        return 1
    }

    const [counter, setCounter] = useState(generateData)

    const changer = (state: number) => {
        console.log('data changed')
        return state + 1
    }

    return (
        <div>
            <h1>{counter}</h1>
            <div>
                <button onClick={() => setCounter(changer)}>+1</button>
            </div>
        </div>
    );
};

export default UseState;