import react from "react";
import Logo from "../assets/logo.png";
import Header from "../components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// TODO: Make Buttons Reponsive to text length 
//		 Make an easier way to change color of buttons
//		 Figure out repeating media squares / scrolling?	

export default function Recommendations() {

  return (
    <div className="pb-20">
      <Header />
        <div id="Introduction" className="pt-10">
					<h1 className="pl-6 pt-12 font-bold text-3xl">Here are your Recommendations</h1>
					<p className="pl-6 pt-2 pb-4 font-medium text-gray-600"> Check out your video's tags and their videos. </p> 
				</div>

				<div class="flex-1 gap-4 ml-6 mr-6 mt-5">
					<div id="First Content Row"  className="button-allign">
						<div className="button-blue"> Java </div>
					</div>
					<div class="grid  xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-14 mr-14 mt-5">
						<div className="w-full h-44 bg-gray-300 rounded-md"></div>
						<div className="p-4"></div>
					</div>
					
					<div><p className="pt-2 pb-8 font-style: underline, italic"> View more in this tag... </p></div>
					<div id="Second Content Row"  className="button-allign"> 
						<div className="button-yellow"> Python </div>
					</div>
					<div class="grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-14 mr-14 mt-5">
						<div className="w-full h-44 bg-gray-300 rounded-md"></div>
						<div className="p-4"></div>
					</div>
					<div><p className="pt-2 pb-8 font-style: underline, italic"> View more in this tag... </p></div>
					<div id="Third Content Row"  className="button-allign"> 
						<div className="button-green"> Technical Interviews </div>
					</div>		
					<div class="grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-14 mr-14 mt-5">
						<div className="w-full h-44 bg-gray-300 rounded-md"></div>
						<div className="p-4"></div>
					</div>		
					<div><p className="pt-2 pb-8 font-style: underline, italic"> View more in this tag... </p></div>	
				</div>






    </div>
  );
}