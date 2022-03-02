import React from "react";
import logo from "../assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img
        src={logo}
        alt="logo from the video game Apex Legends"
        id="header-logo"
      />
    </header>
  );
};

export default Header;
