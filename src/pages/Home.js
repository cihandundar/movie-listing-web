import React from "react";
import Content from "../components/Content";
import Input from "../components/Input";

const Home = () => {
  return (
    <div className="home">
      <Input title="Movies" />
      <Content />
    </div>
  );
};

export default Home;
