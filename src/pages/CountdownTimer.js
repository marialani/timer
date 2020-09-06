import React, { useContext } from "react";
import { RouteDirectionContext } from "../store/AppProvider";
import {
  CountdownPageElm,
  Nav,
  Container,
  NavLink,
} from "../styled/CountdownPageStyes";
import CountDown from "../components/CountDown";

const CountdownTimer = () => {
  const { handleRouteChange } = useContext(RouteDirectionContext);

  return (
    <CountdownPageElm>
      <div>
        <Nav>
          <NavLink
            onClick={() => handleRouteChange("horizontal", "/stopwatch")}
          >
            <span>
              STOPWATCH <i className="fas fa-stopwatch"></i>
            </span>
          </NavLink>
        </Nav>
        <Container>
          <h2>
            COUNTDOWN <hr />
          </h2>
        </Container>
      </div>
      <CountDown />
    </CountdownPageElm>
  );
};

export default CountdownTimer;
