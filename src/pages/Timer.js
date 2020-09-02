import React from "react";
import Watch from "../components/Watch";
import { TimerPageElm } from "../styled/Lib";
import { Link } from "react-router-dom";

const Timer = () => {
  return (
    <TimerPageElm>
      <Watch />
      <Link to="/">Go to Page one →</Link>
    </TimerPageElm>
  );
};

export default Timer;
