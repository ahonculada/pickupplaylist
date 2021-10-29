import react from "react";
import Logo from "../assets/logo.png";
import Header from "../components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Create() {
  //function that gets the video id of a youtube video from the url
  function getId(url) {
    var regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : false;
  }

  return (
    <div>
      <Header />
    </div>
  );
}
