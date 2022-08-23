import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  const [movieData, setMovieData] = useState([]);
  const { id } = useParams();
  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=ccb0a8566b23ab43471cda53fed3d9e7&language=en-US`
      )
      .then((response) => setMovieData(response.data));
  }, []);
  console.log(movieData);

  return <div>{movieData.title}</div>;
};

export default MovieDetails;
