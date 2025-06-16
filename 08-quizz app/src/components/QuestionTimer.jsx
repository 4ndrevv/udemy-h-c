import { useState, useEffect } from "react";

export default function QuestionTimer({quesInd, onTimeout}) {


    const timeout = quesInd.time * 1000;
  const [remainingTime, setRemainingTime] = useState(timeout);


    useEffect( () => {
        console.log('SETTING TIMEOUT');
        const timer = setTimeout( onTimeout, timeout);

        return () => {
            clearTimeout(timer);
        };
    }, [timeout, onTimeout] );

    useEffect( () => {
        const interval = setInterval( () => {
            setRemainingTime(prevRemainingTime => prevRemainingTime -100);
    }, 100 );

    return () => {
        clearInterval(interval);
    };
    }, [] );

        
    return (
        <progress id="question-time" max={timeout} value={remainingTime}/>
    );
}