import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Movie from "./pages/Movie";

import MovieDetails from "./pages/MovieDetails";
import "./styles/main.scss";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Movie} />
        <Route path="/movie/:id" component={MovieDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
