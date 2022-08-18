import React from "react";
import Logo from "../assets/icons/Logo";
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__logo">
          <img src={Logo} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
