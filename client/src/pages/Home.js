import react from "react";
import Logo from "../assets/logo.png";
import Header from "../components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Header />
      <h1 className="pl-6 pt-12 font-bold text-3xl">👋 Welcome Back!</h1>
      <p className="pl-6 pt-2 font-medium text-lg text-gray-600">
        Here’s your recommended videos:
      </p>
    </div>
  );
}
