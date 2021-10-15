import react from "react";
import Logo from "../assets/logo.png";
import Header from "../components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Browse() {
  return (
    <div>
      <Header />
      <h1>History</h1>
    </div>
  );
}
