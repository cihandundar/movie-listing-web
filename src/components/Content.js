import React, { useEffect, useState } from "react";
import axios from "axios";
import Star from "../assets/icons/Star";
import { Link } from "react-router-dom";

const Content = () => {
  const [movie, setMovie] = useState([]);
  const IMG_API = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=ccb0a8566b23ab43471cda53fed3d9e7&language=en-US&page=1"
      )
      .then((response) => setMovie(response.data.results));
  }, []);

  return (
    <section className="section">
      <div className="section__container">
        {movie.map((card) => (
          <Link key={card.id} to={`/movie/${card.id}`}>
            <div className="section__card">
              <div className="section__card__img">
                <img src={IMG_API + card.poster_path} alt={card.poster_path} />
              </div>
              <div className="section__card__title">
                <h3>{card.title}</h3>
              </div>
              <div className="section__card__vote">
                <Star />
                <p>{card.vote_average}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Content;
