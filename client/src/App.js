import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignIn from "./pages/SignIn.js";
import SignUp from "./pages/SignUp.js";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
