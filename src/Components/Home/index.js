import React, { useEffect, useState } from "react";
import "./index.scss";
import MLogo from "../../assets/images/m-high-resolution-logo-transparent.png";
import AnimateLetter from "../AnimateLittter";
import Logo from "./Logo/index";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["o", "h", "a", "n", "d", "h", "a", "s", "s"];
  const jobArray = [
    "W",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  });

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <span>
            <img src={MLogo} alt="My Logo" />
          </span>
          <AnimateLetter
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <strong>
            <AnimateLetter
              letterClass={letterClass}
              strArray={jobArray}
              idx={25}
            />
          </strong>
        </h1>
        <h2>Front End developer/ Python/ React/ TypeScript</h2>
        <div className="skill-page">
          <a href="/about">
            {/* <h2>Project and skills</h2> */}
            <h2>Portfolio</h2>
          </a>
        </div>
      </div>
      <Logo />
    </div>
  );
};

export default Home;
