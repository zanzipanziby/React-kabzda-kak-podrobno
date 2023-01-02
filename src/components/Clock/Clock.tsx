import React, {useEffect, useState} from 'react';

export const Clock = () => {
    const [date, setDate] = useState(new Date())
    useEffect(
        () => {
            const interval = setInterval(() => {
                setDate(new Date())
            }, 1000)
            return () => clearInterval(interval)
        }, []
    )

    const getClockString = (number: number) => number < 10 ? '0' + number : number

    const secondString = getClockString(date.getSeconds())
    const minString = getClockString(date.getMinutes())
    const hourString = getClockString(date.getHours())

    return (
        <div>
            <span>{hourString}</span>
            :
            <span>{minString}</span>
            :
            <span>{secondString}</span>
        </div>
    );
};

