import React from "react";
import Mybutton from "../components/MyButton/Mybutton";
import Divider from "../components/Divider/Divider";

const About = () => {
  return (
    <div className="ab__container">
      <div className="ab__text__container">
        <h1 className="ab__title">About Red Garage</h1>
        <p className="ab__text">
          Red garage in Smyha
        </p>
        <Divider />
        <Mybutton className={"mybutton__light"}>Learn More</Mybutton>
      </div>
      <div className="ab__img">
        <img src="/png/red-garage-int.png" alt="Myfoto" width="500px" height="500px" />
      </div>
    </div>
  );
};

export default About;
