import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>

        <ul className="nav__list">
          <li className="nav__link">
            <Link to="/movies">Movies</Link>
          </li>
          <li className="nav__link">
            <Link to="tvshows">TV Shows</Link>
          </li>
          <li className="nav__link">
            <Link to="/login">Sign in</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
