import { useRef, useState } from "react";
import Modal from "./Modal";

const TimerChallenge = ({ title, time }) => {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(time * 1000);

  const isTimeActive = timeRemaining >= 0 && timeRemaining < time * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }
  console.log(timeRemaining);

  const resetTimer = () => {
    setTimeRemaining(time * 1000);
  };

  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 10);
    }, 10);
  };

  const handleStop = () => {
    clearTimeout(timer.current);
    dialog.current.open();
  };

  return (
    <>
      <Modal
        result="lost"
        timeRemaining={timeRemaining}
        ref={dialog}
        resetTimer={resetTimer}
        targetTime={time}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {time} {time > 1 ? "seconds" : "second"}
        </p>
        <p>
          <button onClick={isTimeActive ? handleStop : handleStart}>
            {isTimeActive ? "Stop" : "Start"} challenge
          </button>
        </p>
        <p className={isTimeActive && "active"}>
          {isTimeActive ? "Time is runnning" : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
