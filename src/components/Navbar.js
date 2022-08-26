import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const links = [
    {
      id: 1,
      name: "Movies",
      path: "/",
    },

    {
      id: 2,
      name: "TV Shows",
      path: "/tv-shows",
    },

    {
      id: 3,
      name: "Sign in",
      path: "/",
    },
  ];

  return (
    <nav className="nav">
      <div ref={navRef} className="nav__container">
        <div className="nav__logo">
          <Link to="/" onClick={showNavbar}>
            <img src={Logo} alt="" />
          </Link>
        </div>
        <ul className="nav__list">
          {links.map((item) => (
            <li key={item.id} className="nav__link" onClick={showNavbar}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <button className="nav__btn nav__closebtn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </div>

      <button className="nav__btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </nav>
  );
};

export default Navbar;
