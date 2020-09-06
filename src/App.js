import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PageContainer } from "./styled/SharedStyles";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import AppProvider from "./store/AppProvider";
// Pages
import Homepage from "./pages/Homepage";
import Timer from "./pages/Timer";
import CountdownTimer from "./pages/CountdownTimer";
import Intro from "./pages/Intro";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1500);
  }, []);

  return (
    <Router>
      {loading ? (
        <AppProvider>
          <Route
            render={({ location }) => {
              return (
                <PageContainer>
                  <TransitionGroup component={null}>
                    <CSSTransition
                      timeout={300}
                      classNames="page"
                      key={location.key}
                    >
                      <Switch location={location}>
                        <Route exact path="/" render={() => <Homepage />} />
                        <Route
                          exact
                          path="/stopwatch"
                          render={() => <Timer />}
                        />
                        <Route
                          exact
                          path="/countdown"
                          render={() => <CountdownTimer />}
                        />
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                </PageContainer>
              );
            }}
          />
        </AppProvider>
      ) : (
        <Intro />
      )}
    </Router>
  );
}

export default App;
