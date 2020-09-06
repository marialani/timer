import React, { useState, useEffect } from "react";
import {
  Clock,
  Input,
  Container,
  H3,
  ClockDisplay,
} from "../styled/CountdownPageStyes";
import { Button } from "../styled/SharedStyles";
import Alarm from "../assets/audio/alarm.mp3";

export function formatTime(num) {
  return num.toLocaleString("en-UK", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
}

const CountDown = () => {
  const [countdown, setcountdown] = useState({
    timerStarted: false,
    timerStopped: true,
    hours: 0,
    minutes: 0,
    seconds: 0,
    captures: [],
  });
  const [paused, setpaused] = useState(false);

  const audioEl = document.getElementsByClassName("audio-element")[0];

  let stopwatch;
  useEffect(() => {
    function counter() {
      if (
        countdown.seconds === 0 &&
        countdown.hours === 0 &&
        countdown.minutes === 0 &&
        countdown.timerStarted
      ) {
        audioEl && audioEl.play();
        return stopwatch && clearInterval(stopwatch);
      }
      if (countdown.seconds === 0 && countdown.timerStarted) {
        return setcountdown((prevState) => ({
          ...prevState,
          minutes: prevState.minutes - 1,
          seconds: 59,
        }));
      }
      if (countdown.minutes === 59 && countdown.timerStarted) {
        return setcountdown((prevState) => ({
          ...prevState,
          hours: prevState.hours - 1,
          minutes: 0,
          seconds: 0,
        }));
      }
      if (
        countdown.seconds <= 59 &&
        countdown.seconds > 0 &&
        countdown.timerStarted
      ) {
        return setcountdown((prevState) => ({
          ...prevState,
          seconds: prevState.seconds - 1,
        }));
      }
    }
    if (countdown.timerStarted) {
      // eslint-disable-next-line
      stopwatch = setInterval(counter, 1000);
    }
    return () => {
      clearInterval(stopwatch);
    };
  }, [countdown]);

  function handleTimerStart(e) {
    setcountdown((prevState) => ({
      ...prevState,
      timerStarted: true,
      timerStopped: false,
    }));
    setpaused(false);
  }

  function handleTimerStop(e) {
    e.preventDefault();
    setcountdown((prevState) => ({
      ...prevState,
      timerStarted: false,
      timerStopped: true,
    }));
    clearInterval(stopwatch);
    setpaused(true);
  }

  function handleTimerReset() {
    setcountdown({
      timerStarted: false,
      timerStopped: true,
      seconds: 0,
      minutes: 0,
      hours: 0,
      captures: [],
    });
    clearInterval(stopwatch);
    setpaused(null);
  }

  function handleTimeChange(e) {
    let newTime = new Date(e.target.valueAsNumber)
      .toUTCString()
      .split(" ")[4]
      .split(":");
    setcountdown((prevState) => ({
      ...prevState,
      hours: parseInt(newTime[0]),
      minutes: parseInt(newTime[1]),
      seconds: parseInt(newTime[2]),
      timerStopped: true,
      timerStarted: false,
    }));
  }

  return (
    <Container>
      <H3>SELECT A TIME:</H3>
      <br />
      <Input
        type="time"
        step="1"
        defaultValue={"00:00:00"}
        onChange={handleTimeChange}
      />
      <audio className="audio-element">
        <source src={Alarm} type="audio/mp3" />
      </audio>
      <Clock>
        <ClockDisplay className={paused ? "blink" : ""}>
          {formatTime(countdown.hours) +
            ":" +
            formatTime(countdown.minutes) +
            ":" +
            formatTime(countdown.seconds)}
        </ClockDisplay>
      </Clock>
      <div>
        <Button colour="#43a243" onClick={handleTimerStart}>
          START <i className="fa fa-play"></i>
        </Button>
        <Button colour="#f24848" onClick={handleTimerStop}>
          PAUSE <i className="fa fa-pause"></i>
        </Button>
        <Button colour="#117cf6" onClick={handleTimerReset}>
          RESET <i className="fas fa-retweet"></i>
        </Button>
      </div>
    </Container>
  );
};

export default CountDown;
