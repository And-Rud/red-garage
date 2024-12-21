import React from "react";
import Mybutton from "../components/MyButton/Mybutton";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__title">OPTIMENDS</div>
      <div className="menu__container">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/testimonals">Testimonals</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <div className="header__button">
        <Mybutton className={`mybutton__light`}>Contact us</Mybutton>
        <Mybutton className={`mybutton__dark`}>Book</Mybutton>
      </div>
    </div>
  );
};

export default Header;
