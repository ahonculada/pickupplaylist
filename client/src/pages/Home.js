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
      <div class="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 ml-6 mr-6 mt-5">
        <div className="bg-gray-200 rounded-xl">
          <div className="w-full h-52 bg-gray-300 rounded-t-xl"></div>
          <div className="p-4">
            <h2 className="font-bold text-xl">Video Title</h2>
          </div>
        </div>
        <div className="bg-gray-200 rounded-xl">
          <div className="w-full h-52 bg-gray-300 rounded-t-xl"></div>
          <div className="p-4">
            <h2 className="font-bold text-xl">Video Title</h2>
          </div>
        </div>
        <div className="bg-gray-200 rounded-xl">
          <div className="w-full h-52 bg-gray-300 rounded-t-xl"></div>
          <div className="p-4">
            <h2 className="font-bold text-xl">Video Title</h2>
          </div>
        </div>
        <div className="bg-gray-200 rounded-xl">
          <div className="w-full h-52 bg-gray-300 rounded-t-xl"></div>
          <div className="p-4">
            <h2 className="font-bold text-xl">Video Title</h2>
          </div>
        </div>
        <div className="bg-gray-200 rounded-xl">
          <div className="w-full h-52 bg-gray-300 rounded-t-xl"></div>
          <div className="p-4">
            <h2 className="font-bold text-xl">Video Title</h2>
          </div>
        </div>
        <div className="bg-gray-200 rounded-xl">
          <div className="w-full h-52 bg-gray-300 rounded-t-xl"></div>
          <div className="p-4">
            <h2 className="font-bold text-xl">Video Title</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
