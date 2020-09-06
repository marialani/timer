import React, { createContext, useState } from "react";
import { useHistory } from "react-router-dom";

export const TimerContext = createContext();
export const RouteDirectionContext = createContext();

function AppProvider({ children }) {
  const history = useHistory();

  // Timer Context
  const [timer, settimer] = useState({
    timerStarted: false,
    timerStopped: true,
    hours: 0,
    minutes: 0,
    seconds: 0,
    captures: [],
    prevCapture: null,
  });

  const timerState = { timer, settimer };

  // Route Direction Context
  const [direction, setDirection] = useState("vertical");

  const routeDirectionState = { direction, setDirection, handleRouteChange };

  function handleRouteChange(direction, path) {
    let setState = new Promise((resolve, reject) => {
      resolve(setDirection(direction));
    });

    setState.then(() => history.push(path)).catch(console.log);
  }

  return (
    <TimerContext.Provider value={timerState}>
      <RouteDirectionContext.Provider value={routeDirectionState}>
        {children}
      </RouteDirectionContext.Provider>
    </TimerContext.Provider>
  );
}

export default AppProvider;
