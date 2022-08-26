import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Movie from "./pages/Movie";
import MovieDetails from "./pages/MovieDetails";
import Series from "./pages/Series";
import SeriesDetails from "./pages/SeriesDetails";
import "./styles/main.scss";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Movie} />
        <Route path="/movie/:id" component={MovieDetails} />
        <Route exact path="/tv-shows" component={Series} />
        <Route path="/tv-shows/:id" component={SeriesDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
