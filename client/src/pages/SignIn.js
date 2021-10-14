import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function SignIn() {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function authenticate() {
    if (email !== "" && password !== "") {
      history.push("/home");
    } else {
      toast.error("Please fill all the fields");
    }
  }

  return (
    <div>
      <div className="bg-gray-100 h-screen">
        <div className="pt-20 grid place-items-center">
          <img src={Logo} className="w-1/4" />
          <div className="w-1/3 p-8 h-96 bg-white mt-10 rounded-2xl border-solid border-gray-200 border-2">
            <h1 className="text-3xl text-left font-bold text-gray-600">
              Sign In
            </h1>
            <Link to="/signup">
              <p className="pt-2 underline">Sign Up Instead?</p>
            </Link>
            <h3 className="mt-4">Email</h3>
            <input
              className="p-2 w-full border-solid border-gray-200 border-2 rounded-md"
              placeholder="johndoe@gmail.com"
              type="email"
              //   onChange={(e) => setEmail(e.target.value)}
            ></input>
            <h3 className="mt-3">Password</h3>
            <input
              className="p-2 w-full border-solid border-gray-200 border-2 rounded-md"
              placeholder="**********"
              type="password"
              //   onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button
              onClick={authenticate}
              className="w-full bg-blue-600 mt-6 text-white font-semibold p-2 rounded-lg hover:bg-blue-500"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
