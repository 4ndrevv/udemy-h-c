import { useState, useRef } from "react";
import ResultModal from "./ReasultModel";


export default function TimerChallenge({title, targetTime}) {

    const [timeRemaining, setTimeRemaining] = useState(targetTime*1000);

    const timerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    const timer = useRef();
    const dialog = useRef();
    

    if(timeRemaining <= 0) {
        clearInterval(timer.current);
        setTimeRemaining(targetTime*1000);
        dialog.current.open();
    }

    

    function handleStart() { 
        timer.current = setInterval( () => {
            setTimeRemaining(prevTimeReamaining => prevTimeReamaining - 10);
        }, 10 );
    }

    function handleStop() {
        clearInterval(timer.current);
        dialog.current.open();
    }

    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} result="lost"/>
            <section className="challenge">
            <h2>{title}</h2>
            
            <p className="challenge-time">
                {targetTime} second {targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerActive ? handleStop : handleStart}>
                    {timerActive ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerActive ? 'active' : undefined}>
                {timerActive ? 'Time is Running...' : 'Timer inactive'}
            </p>
            </section>
        </>
        
    );

}