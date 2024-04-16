import React, { useRef, forwardRef, useImperativeHandle } from "react";

const Modal = forwardRef(({ targetTime, resetTimer, timeRemaining }, ref) => {
  const dialogRef = useRef();

  const isLost = timeRemaining <= 0;
  const timeLeft = (timeRemaining / 1000).toFixed(2);
  const score = ((1 - timeLeft / targetTime) * 100).toFixed(0);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialogRef.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialogRef} className="result-modal" onClose={resetTimer}>
      {isLost && <h2>You Lost</h2>}
      {!isLost && <h2>Your Score {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>{timeLeft} seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default Modal;
