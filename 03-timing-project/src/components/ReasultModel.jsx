import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { useReducer } from 'react';

const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref) {

    const dialog_2 = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog_2.current.showModal();
            }
        }
    });

  return (
    <dialog ref={dialog_2} className="result-modal">
      <h2>You {result}</h2>
      <p>The target time was <strong>{targetTime} second.</strong></p>
      <p>You stop the timer with <strong>X second left.</strong></p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
