import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Movie from "./pages/Movie";
import Series from "./pages/Series";
import "./styles/main.scss";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={Movie} />
        <Route exact path="/tvshows" component={Series} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
