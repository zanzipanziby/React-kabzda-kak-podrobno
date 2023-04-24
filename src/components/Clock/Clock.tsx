import React, {useEffect, useState} from 'react';
import s from "./Clock.module.css"

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



export const AnalogClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(intervalID);
    }, []);

    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();

    const secondHandStyle = {
        transform: `rotate(${seconds * 6}deg)`,
    };

    const minuteHandStyle = {
        transform: `rotate(${minutes * 6}deg)`,
    };

    const hourHandStyle = {
        transform: `rotate(${hours * 30 + minutes * 0.5}deg)`,
    };

    return (
        <div className={s.analogClock}>
            <div className={s.dial}>
                <div className={`${s.hand} ${s.hour}`} style={hourHandStyle} />
                <div className={`${s.hand} ${s.minute}`} style={minuteHandStyle} />
                <div className={`${s.hand} ${s.second}`} style={secondHandStyle} />
            </div>
        </div>
    );
}


