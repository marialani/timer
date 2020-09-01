import React, { useState, useEffect } from "react";

const Timer = () => {
  const [timer, settimer] = useState({
    timerStarted: false,
    timerStopped: true,
    hours: 0,
    minutes: 0,
    seconds: 0,
    captures: [],
  });

  let stopwatch;
  useEffect(() => {
    function counter() {
      if (timer.seconds === 59) {
        return settimer((prevState) => ({
          ...prevState,
          minutes: prevState.minutes + 1,
          seconds: 0,
        }));
      } else if (timer.minutes === 59) {
        return settimer((prevState) => ({
          ...prevState,
          hours: prevState.hours + 1,
          minutes: 0,
          seconds: 0,
        }));
      } else {
        return settimer((prevState) => ({
          ...prevState,
          seconds: prevState.seconds + 1,
        }));
      }
    }
    if (timer.timerStarted) {
      // eslint-disable-next-line
      stopwatch = setInterval(counter, 1000);
    }
    return () => {
      clearInterval(stopwatch);
    };
  }, [timer]);

  function handleTimerStart(e) {
    settimer((prevState) => ({
      ...prevState,
      timerStarted: true,
      timerStopped: false,
    }));
  }

  function handleTimerStop(e) {
    e.preventDefault();
    // settimer((prevState) => ({
    //   ...prevState,
    //   timerStarted: true,
    //   timerStopped: false,
    // }));
    clearInterval(stopwatch);
  }

  function handleTimerReset() {
    settimer({
      timerStarted: false,
      timerStopped: true,
      seconds: 0,
      minutes: 0,
      hours: 0,
      captures: [],
    });
    clearInterval(stopwatch);
  }

  function handleTimerCapture() {
    settimer((prevState) => ({
      ...prevState,
      captures: [
        ...prevState.captures,
        timer.hours + ":" + timer.minutes + ":" + timer.seconds,
      ],
    }));
  }

  return (
    <div className="container">
      <div className="timer-container">
        <div className="current-timer">
          {timer.hours + ":" + timer.minutes + ":" + timer.seconds}
        </div>
        <div className="timer-controls">
          <button onClick={handleTimerStart}>Start</button>
          <button onClick={handleTimerStop}>Stop</button>
          <button onClick={handleTimerCapture}>Capture</button>
          <button onClick={handleTimerReset}>Reset</button>
        </div>
      </div>
      <div className="timer-captures">
        {timer.captures &&
          timer.captures.map((time, index) => {
            return <code>{"Lap time: " + (index + 1) + " -- " + time}</code>;
          })}
      </div>
    </div>
  );
};

export default Timer;
