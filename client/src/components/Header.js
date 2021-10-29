import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Profile from "../assets/profile.png";
import { Menu, Transition } from "@headlessui/react";

export default function Header() {
  let history = useHistory();
  return (
    <div className="w-full bg-white border-b-2 border-solid border-gray-300 pt-4 pb-4 pl-4 pr-4 flex justify-between fixed">
      <div className="w-1/3">
        <Link to="/home">
          <img src={Logo} alt="logo" className="w-60 h-8" />
        </Link>
      </div>
      <ul className="flex text-blue-600 font-bold text-xl w-1/3 justify-center">
        <Link to="/home">
          <li className="">Home</li>
        </Link>
        <Link to="/browse">
          <li className="pl-4">Browse</li>
        </Link>
        <Link to="/history">
          <li className="pl-4">History</li>
        </Link>
      </ul>
      <div className="w-1/3">
        <Menu>
          <Menu.Button className="float-right">
            <img src={Profile} className="w-8 float-right" />
          </Menu.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items className="absolute right-0 w-32 mt-10 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none mr-4">
              <Menu.Item onClick={() => history.push("/")}>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-100" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Sign Out
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
