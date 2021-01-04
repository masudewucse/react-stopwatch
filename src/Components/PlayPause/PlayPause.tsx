import React, {useState} from 'react'
import './PlayPause.css';

interface PlayPauseProps {
    receiveTime: Function;
}

const PlayPause: React.FC<PlayPauseProps> = (props: PlayPauseProps) =>{
     const {receiveTime} = props;
    const [time, setTime] = useState<number>(0);
    const [intervalid, setIntervalId] = useState<number>(0);
 
    const StartButtonClicked = () =>{
        const intervalId: any = setInterval(()=>{
            receiveTime((prev: number) => prev + 1)
        }, 1000);

        setIntervalId(intervalId);
    }


    const StopSetInterval = () =>{
        clearInterval(intervalid);
    }

    const ResetInterval = () =>{
        clearInterval(intervalid);
        receiveTime(0);
    }
    
    return (
    <div className='container'>
        <button onClick={StartButtonClicked}>Start</button>
        <button onClick={StopSetInterval}>Stop</button>
        <button onClick={ResetInterval}>Reset</button>
    </div>
        );
}


export default PlayPause;