import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Profile from "../assets/profile.png";

export default function Header() {
  return (
    <div className="w-full bg-gray-50 border-b-2 border-solid border-gray-300 pt-4 pb-4 pl-4 pr-4 flex justify-between">
      <div className="w-1/3">
        <img src={Logo} alt="logo" className="w-60 h-8" />
      </div>
      <ul className="flex text-blue-600 font-bold text-xl w-1/3 justify-center">
        <li className="">Home</li>
        <li className="pl-4">Browse</li>
        <li className="pl-4">History</li>
      </ul>
      <div className="w-1/3">
        <img src={Profile} className="w-8 float-right" />
      </div>
    </div>
  );
}
