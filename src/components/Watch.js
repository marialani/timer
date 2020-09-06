import React, { useContext, useEffect, useState } from "react";
import { TimerContext } from "../store/AppProvider";
import {
  Container,
  WatchDiv,
  Timer,
  WatchImgBkg,
  ButtonDiv,
  WatchDisplay,
  H2,
} from "../styled/TimerPageStyles";
import { Button } from "../styled/SharedStyles";
import WatchHeader from "./WatchHeader";
import Lights from "./Lights";
import { formatTime } from "./CountDown";

const Watch = () => {
  const { timer, settimer } = useContext(TimerContext);
  const [paused, setpaused] = useState(false);

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
    setpaused(false);
  }

  function handleTimerStop(e) {
    e.preventDefault();
    settimer((prevState) => ({
      ...prevState,
      timerStarted: false,
      timerStopped: true,
    }));
    clearInterval(stopwatch);
    setpaused(true);
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
    setpaused(null);
  }

  function handleTimerCapture() {
    timer.timerStarted &&
      settimer((prevState) => ({
        ...prevState,
        seconds: 0,
        minutes: 0,
        hours: 0,
        captures: [
          ...prevState.captures,
          formatTime(timer.hours) +
            ":" +
            formatTime(timer.minutes) +
            ":" +
            formatTime(timer.seconds),
        ],
      }));
  }

  return (
    <Container img="https://res.cloudinary.com/dmwyuc3gd/image/upload/dpr_auto,f_auto,q_auto/v1599316281/react%20timer/home-bkg_nxztax.jpg">
      <Lights />
      <H2>
        STOPWATCH
        <hr />
      </H2>
      <WatchDiv>
        <WatchImgBkg src="https://res.cloudinary.com/dmwyuc3gd/image/upload/e_sharpen:100,f_auto,q_auto/v1599316279/react%20timer/smartwatch_ojslnt.png" />
        <Timer colour="white">
          <WatchHeader />
          <WatchDisplay className={paused ? "blink" : ""}>
            {formatTime(timer.hours) +
              ":" +
              formatTime(timer.minutes) +
              ":" +
              formatTime(timer.seconds)}
          </WatchDisplay>
          <ButtonDiv>
            <Button colour="#43a243" onClick={handleTimerStart}>
              START <i className="fa fa-play "></i>
            </Button>
            <Button colour="#f24848" onClick={handleTimerStop}>
              PAUSE <i className="fa fa-pause "></i>
            </Button>
            <Button colour="#fc941d" onClick={handleTimerCapture}>
              SAVE <i className="fa fa-save "></i>
            </Button>
            <Button colour="#117cf6" onClick={handleTimerReset}>
              RESET <i className="fas fa-redo"></i>
            </Button>
          </ButtonDiv>
        </Timer>
      </WatchDiv>
    </Container>
  );
};

export default Watch;
