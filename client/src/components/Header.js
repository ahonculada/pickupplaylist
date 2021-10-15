import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Header() {
  return (
    <div className="w-full bg-gray-50 border-b-2 border-solid border-gray-300 pt-4 pb-4 pl-4 flex justify-between">
      <img src={Logo} alt="logo" className="w-60 h-8" />
      <ul className="flex inline-block">
        <li className="">Home</li>
        <li className="pl-4">Browse</li>
        <li className="pl-4">History</li>
      </ul>
      <div></div>
    </div>
  );
}
