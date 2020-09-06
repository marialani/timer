import React, { useContext } from "react";
import { TimerContext } from "../store/AppProvider";
import { RouteDirectionContext } from "../store/AppProvider";
import {
  SidePanelContainer,
  H3,
  NavLink,
  NavContainer,
  LapTimesDiv,
} from "../styled/TimerPageStyles";

const SidePanel = () => {
  const { timer } = useContext(TimerContext);
  const { handleRouteChange } = useContext(RouteDirectionContext);

  return (
    <SidePanelContainer>
      <NavContainer>
        <NavLink to="/" onClick={() => handleRouteChange("vertical", "/")}>
          <span>
            HOME <i className="fa fa-home"></i>
          </span>
        </NavLink>
        <NavLink onClick={() => handleRouteChange("horizontal", "/countdown")}>
          <span>
            COUNTDOWN <i className="fas fa-hourglass-half"></i>
          </span>
        </NavLink>
      </NavContainer>
      <LapTimesDiv>
        <H3>LAP TIMES</H3>
        {timer.captures &&
          timer.captures.map((time, index) => {
            return <code key={index}>{`Lap ${index + 1} -- ${time}`}</code>;
          })}
      </LapTimesDiv>
    </SidePanelContainer>
  );
};

export default SidePanel;
