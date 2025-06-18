import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTION from '../questions';

export default function Summary({userAnswers}) {

    const skippedAnswer = userAnswers.filter(answer => answer ===null);
    const correctAnswer = userAnswers.filter(
        (answer, index) => answer === QUESTION[index].answers[0]
    );

    const skippedAnswerShare = Math.round(
        (skippedAnswer.length / userAnswers.length) * 100
    );

    const correctAnswerShare = Math.round(
        (correctAnswer.length / userAnswers.length) * 100
    );

    const wrongAnswerShare = 100 - skippedAnswerShare - correctAnswerShare;


    return (
        <div id="summary" >
                <img src={quizCompleteImg} alt="quizz complete" />
                <h2>Quizz Completed</h2>

                <div id="summary-stats" className="">
                    <p className="">
                        <span className="number">{skippedAnswerShare}%</span>
                        <span className="text">skipped</span>
                    </p>
                    <p className="">
                        <span className="number">{correctAnswerShare}%</span>
                        <span className="text">answered correctly</span>
                    </p>
                    <p className="">
                        <span className="number">{wrongAnswerShare}%</span>
                        <span className="text">answered incorrectly</span>
                    </p>
                </div>

                <ol className="">
                    { userAnswers.map((answer, index) => {
                        let cssClass = 'user-answer';

                        if(answer === null) {
                            cssClass += ' skipped';
                        }else if (answer === QUESTION[index].answers[0]){
                            cssClass += ' correct';
                        }else{
                            cssClass += ' wrong';
                        }

                        return(
                            <li key={index} className="">
                            <h3 className="">{index + 1}</h3>
                            <p className="question">{QUESTION[index].text}</p>
                            <p className={cssClass}>{answer ?? 'Skipped'}</p>
                        </li>
                        )
                    }) }
                </ol>
            </div>
    );
}