import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Input from "../components/Input";

const Series = () => {
  const [seriesData, setSeriesData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/search/shows?q=war`)
      .then((response) => setSeriesData(response.data));
  }, []);

  return (
    <div className="series">
      <Input />
      <div className="series__container">
        {seriesData.map((tv) => (
          <Link key={tv.show.id} to={`/series/${tv.show.id}`}>
            <div className="series__card">
              <div className="series__card__img">
                <img src={tv.show.image.medium} alt="" />
              </div>
              <div className="series__card__title">
                <h3>{tv.show.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Series;
