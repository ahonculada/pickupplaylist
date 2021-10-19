import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignIn from "./pages/SignIn.js";
import SignUp from "./pages/SignUp.js";
import Home from "./pages/Home";
import Header from "./components/Header.js";
import { createBrowserHistory } from "history";
import Browse from "./pages/Browse";
import History from "./pages/History";
import Create from "./pages/Create";

function App() {
  return (
    <div>
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
          <Route exact path="/browse">
            <Browse />
          </Route>
          <Route exact path="/history">
            <History />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
