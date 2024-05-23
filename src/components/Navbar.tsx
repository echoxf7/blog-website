// import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/">
        <img src="gojo-training.png" alt="Gojo Training Logo" />
      </a>

      <div className="links">
        <a href="/signin">SignIn</a>
        <a href="/signup">Register</a>
      </div>
    </div>
  );
};

export default Navbar;
