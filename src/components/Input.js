import React from "react";
import Search from "../assets/icons/Search";

const Input = (props) => {
  return (
    <div className="input">
      <div className="input__container">
        <div className="input__title">
          <h2>{props.title}</h2>
        </div>
        <div className="input__wrapper">
          <div className="input__icon">
            <Search />
          </div>
          <input type="text" placeholder="Search Movies or TV Shows" />
        </div>
      </div>
    </div>
  );
};

export default Input;
