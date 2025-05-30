import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { useReducer } from 'react';
import { createPortal } from 'react-dom';

const ResultModal = forwardRef(function ResultModal({ targetTime, remainingTime, onReset }, ref) {

    const userLost = remainingTime <= 0;
    const formattedRemaingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100 )

    const dialog_2 = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog_2.current.showModal();
            }
        }
    });

  return createPortal(
    <dialog ref={dialog_2} className="result-modal">
      {userLost && <h2>You lost</h2> }
      {!userLost && <h2>Your score : {score} </h2>}
      <p>The target time was <strong>{targetTime} second.</strong></p>
      <p>You stop the timer with <strong>{formattedRemaingTime} second left.</strong></p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default ResultModal;
