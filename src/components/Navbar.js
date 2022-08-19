import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
const Navbar = () => {
  const links = [
    {
      id: 1,
      name: "Movies",
      path: "movies",
    },

    {
      id: 2,
      name: "TV Shows",
      path: "tvshows",
    },

    {
      id: 3,
      name: "Sign in",
      path: "login",
    },
  ];

  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <ul className="nav__list">
          {links.map((item) => (
            <li key={item.id} className="nav__link">
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
