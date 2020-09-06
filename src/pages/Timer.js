import React, { useContext } from "react";
import { RouteDirectionContext } from "../store/AppProvider";
import Watch from "../components/Watch";
import { TimerPageElm } from "../styled/TimerPageStyles";
import SidePanel from "../components/SidePanel";

const Timer = () => {
  const { direction } = useContext(RouteDirectionContext);

  return (
    <TimerPageElm direction={direction}>
      <SidePanel />
      <Watch />
    </TimerPageElm>
  );
};

export default Timer;
