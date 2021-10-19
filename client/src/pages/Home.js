import react from "react";
import Logo from "../assets/logo.png";
import Header from "../components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Home() {
  let history = useHistory();
  return (
    <div className="pb-20">
      <Header />
      <div className="pt-10">
        <div className="flex justify-between pr-6">
          <h1 className="pl-6 pt-12 font-bold text-3xl">👋 Welcome Back!</h1>
          <button
            onClick={() => history.push("/create")}
            className="flex border border-solid bg-gray-50 p-2 h-10 mt-10 pl-6 pr-6 rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-gray-600"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="ml-4 pr font-bold text-gray-600">
              New Recomendation
            </span>
          </button>
        </div>
        <p className="pl-6 pt-2 font-medium text-lg text-gray-600">
          Here’s your recommended videos:
        </p>
        <div class="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 ml-6 mr-6 mt-5">
          <div className="bg-gray-100 rounded-xl">
            <div className="w-full h-52 bg-gray-300 rounded-t-xl"></div>
            <div className="p-4">
              <h2 className="font-bold text-xl">Video Title</h2>
            </div>
            <div className="grid grid-cols-4 gap-4 ml-6 mr-6 mb-6">
              <div className="bg-blue-200 border-blue-600 border border-solid text-center text-blue-600 rounded-3xl font-medium">
                Math
              </div>
              <div className="bg-red-200 border-red-600 border border-solid text-center text-red-600 rounded-3xl font-medium">
                Algebra
              </div>
              <div className="bg-green-200 border-green-600 border border-solid text-center text-green-600 rounded-3xl font-medium">
                Functions
              </div>
              <div className="bg-pink-200 border-pink-600 border border-solid text-center text-pink-600 rounded-3xl font-medium">
                Math
              </div>
              <div className="bg-yellow-200 border-yellow-600 border border-solid text-center text-yellow-600 rounded-3xl font-medium">
                Algebra
              </div>
              <div className="bg-indigo-200 border-indigo-600 border border-solid text-center text-indigo-600 rounded-3xl font-medium">
                Functions
              </div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-xl">
            <div className="w-full h-52 bg-gray-300 rounded-t-xl"></div>
            <div className="p-4">
              <h2 className="font-bold text-xl">Video Title</h2>
            </div>
            <div className="grid grid-cols-4 gap-4 ml-6 mr-6 mb-6">
              <div className="bg-blue-200 border-blue-600 border border-solid text-center text-blue-600 rounded-3xl font-medium">
                Math
              </div>
              <div className="bg-red-200 border-red-600 border border-solid text-center text-red-600 rounded-3xl font-medium">
                Algebra
              </div>
              <div className="bg-green-200 border-green-600 border border-solid text-center text-green-600 rounded-3xl font-medium">
                Functions
              </div>
              <div className="bg-pink-200 border-pink-600 border border-solid text-center text-pink-600 rounded-3xl font-medium">
                Math
              </div>
              <div className="bg-yellow-200 border-yellow-600 border border-solid text-center text-yellow-600 rounded-3xl font-medium">
                Algebra
              </div>
              <div className="bg-indigo-200 border-indigo-600 border border-solid text-center text-indigo-600 rounded-3xl font-medium">
                Functions
              </div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-xl">
            <div className="w-full h-52 bg-gray-300 rounded-t-xl"></div>
            <div className="p-4">
              <h2 className="font-bold text-xl">Video Title</h2>
            </div>
            <div className="grid grid-cols-4 gap-4 ml-6 mr-6 mb-6">
              <div className="bg-blue-200 border-blue-600 border border-solid text-center text-blue-600 rounded-3xl font-medium">
                Math
              </div>
              <div className="bg-red-200 border-red-600 border border-solid text-center text-red-600 rounded-3xl font-medium">
                Algebra
              </div>
              <div className="bg-green-200 border-green-600 border border-solid text-center text-green-600 rounded-3xl font-medium">
                Functions
              </div>
              <div className="bg-pink-200 border-pink-600 border border-solid text-center text-pink-600 rounded-3xl font-medium">
                Math
              </div>
              <div className="bg-yellow-200 border-yellow-600 border border-solid text-center text-yellow-600 rounded-3xl font-medium">
                Algebra
              </div>
              <div className="bg-indigo-200 border-indigo-600 border border-solid text-center text-indigo-600 rounded-3xl font-medium">
                Functions
              </div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-xl">
            <div className="w-full h-52 bg-gray-300 rounded-t-xl"></div>
            <div className="p-4">
              <h2 className="font-bold text-xl">Video Title</h2>
            </div>
            <div className="grid grid-cols-4 gap-4 ml-6 mr-6 mb-6">
              <div className="bg-blue-200 border-blue-600 border border-solid text-center text-blue-600 rounded-3xl font-medium">
                Math
              </div>
              <div className="bg-red-200 border-red-600 border border-solid text-center text-red-600 rounded-3xl font-medium">
                Algebra
              </div>
              <div className="bg-green-200 border-green-600 border border-solid text-center text-green-600 rounded-3xl font-medium">
                Functions
              </div>
              <div className="bg-pink-200 border-pink-600 border border-solid text-center text-pink-600 rounded-3xl font-medium">
                Math
              </div>
              <div className="bg-yellow-200 border-yellow-600 border border-solid text-center text-yellow-600 rounded-3xl font-medium">
                Algebra
              </div>
              <div className="bg-indigo-200 border-indigo-600 border border-solid text-center text-indigo-600 rounded-3xl font-medium">
                Functions
              </div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-xl">
            <div className="w-full h-52 bg-gray-300 rounded-t-xl"></div>
            <div className="p-4">
              <h2 className="font-bold text-xl">Video Title</h2>
            </div>
            <div className="grid grid-cols-4 gap-4 ml-6 mr-6 mb-6">
              <div className="bg-blue-200 border-blue-600 border border-solid text-center text-blue-600 rounded-3xl font-medium">
                Math
              </div>
              <div className="bg-red-200 border-red-600 border border-solid text-center text-red-600 rounded-3xl font-medium">
                Algebra
              </div>
              <div className="bg-green-200 border-green-600 border border-solid text-center text-green-600 rounded-3xl font-medium">
                Functions
              </div>
              <div className="bg-pink-200 border-pink-600 border border-solid text-center text-pink-600 rounded-3xl font-medium">
                Math
              </div>
              <div className="bg-yellow-200 border-yellow-600 border border-solid text-center text-yellow-600 rounded-3xl font-medium">
                Algebra
              </div>
              <div className="bg-indigo-200 border-indigo-600 border border-solid text-center text-indigo-600 rounded-3xl font-medium">
                Functions
              </div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-xl">
            <div className="w-full h-52 bg-gray-300 rounded-t-xl"></div>
            <div className="p-4">
              <h2 className="font-bold text-xl">Video Title</h2>
            </div>
            <div className="grid grid-cols-4 gap-4 ml-6 mr-6 mb-6">
              <div className="bg-blue-200 border-blue-600 border border-solid text-center text-blue-600 rounded-3xl font-medium">
                Math
              </div>
              <div className="bg-red-200 border-red-600 border border-solid text-center text-red-600 rounded-3xl font-medium">
                Algebra
              </div>
              <div className="bg-green-200 border-green-600 border border-solid text-center text-green-600 rounded-3xl font-medium">
                Functions
              </div>
              <div className="bg-pink-200 border-pink-600 border border-solid text-center text-pink-600 rounded-3xl font-medium">
                Math
              </div>
              <div className="bg-yellow-200 border-yellow-600 border border-solid text-center text-yellow-600 rounded-3xl font-medium">
                Algebra
              </div>
              <div className="bg-indigo-200 border-indigo-600 border border-solid text-center text-indigo-600 rounded-3xl font-medium">
                Functions
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
