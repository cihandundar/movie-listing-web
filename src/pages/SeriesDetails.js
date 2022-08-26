import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SeriesDetails = () => {
  const [seriesData, setSeriesData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/search/shows?q=war`)
      .then((response) => setSeriesData(response.data));
  }, []);

  return (
    <div className="seriesdetails">
      <div className="seriesdetails__contaniner">
        <div className="seriesdetails__wrapper"></div>
      </div>
    </div>
  );
};

export default SeriesDetails;
