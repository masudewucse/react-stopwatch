import React, {useEffect, useState} from 'react';
import './Main.css';
import UtilityFunction from '../../UtilityFunction';
import PlayPause from '../PlayPause/PlayPause';

const Main = () =>{

    const [time, setTime] = useState<number>(0);
    const [timeArray, setTimeArray] = useState<Array<number | string>>([]);


    useEffect(()=>{
        //setTime(86001);
        const timeArray = UtilityFunction(time);
        setTimeArray(timeArray);
    },[time])

console.log('timeArray', timeArray)
    
    return (
        <main>
    <section className="container">
        <p className="timer">{timeArray[0]}</p>
        <span>:</span>
        <p className="timer">{timeArray[1]}</p>
        <span>:</span>
        <p className="timer">{timeArray[2]}</p>
    </section>
    <PlayPause receiveTime={setTime} />
    </main>
        )
};

export default Main;