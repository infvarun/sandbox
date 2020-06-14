import React from "react";
import "./styles.css";
import Counter from "./components/counter.component";
import Navbar from "./components/navbar.component";
import { Switch, Route, Redirect } from "react-router-dom";
import CounterCards from "./components/counter-cards.component";
import GithubApp from "./components/github-app.component";

function App() {
  const getCounter = (operator, operand, title, size) => {
    return (
      <Counter
        operator={operator}
        operand={operand}
        title={title}
        size={size}
      />
    );
  };

  return (
    <React.Fragment>
      <Navbar />

      <div className="container space-to-breath">
        <div className="row">
          <Switch>
            <Route path="/home" render={() => <h1>Coming Soon.....</h1>} />

            <Route
              path="/counter"
              render={() => getCounter("+", 1, "Increment", "col-sm-12")}
            />

            <Route path="/counter-card" component={CounterCards} />

            <Route path="/github-card" component={GithubApp} />
            <Redirect to="/home" from="/" />
          </Switch>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
