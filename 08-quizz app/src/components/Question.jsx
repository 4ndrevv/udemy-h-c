import { useState } from "react";
import questions from "../questions";
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";


export default function Question({ onSelectAnswer, onSkipAnswer, index }) {

    const [ answer, setAnswer ] = useState({
        selectedAnswer: '',
        isCorrect: null
    });


    let timer = 15000;

    if (answer.selectedAnswer && answer.isCorrect === null) {
    timer = 1000; // Giai đoạn đang chờ kiểm tra đúng/sai
    } else if (answer.selectedAnswer && answer.isCorrect !== null) {
    timer = 2000; // Giai đoạn hiển thị đúng/sai
    }


    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })

        setTimeout( () => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: questions[index].answers[0] === answer 
            })

            setTimeout(() => {
                onSelectAnswer(answer);
            }, 2000);
        },1000)
    };

    let answerState = '';

    if (answer.selectedAnswer && answer.isCorrect !== null){
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    }else if (answer.selectedAnswer) {
        answerState = 'answered'
    }

    return (
        <div id="question">
                <QuestionTimer 
                key={timer} 
                timeout={timer} 
                onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null} 
                mode={answerState} />
                <h2>{questions[index].text}</h2>
                <Answers
                answers={questions[index].answers} 
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelecte={handleSelectAnswer} />
            </div>
    );
}