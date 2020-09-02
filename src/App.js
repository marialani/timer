import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PageContainer } from "./styled/Lib";
import { TransitionGroup, CSSTransition } from "react-transition-group";
// Pages
import Homepage from "./pages/Homepage";
import Timer from "./pages/Timer";

function App() {
  return (
    <Router>
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
                    <Route exact path="/details" component={Timer} />
                    <Route exact path="/" component={Homepage} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </PageContainer>
          );
        }}
      />
    </Router>
  );
}

export default App;
