import React, { useState, useEffect } from "react";
import Axios from "../axiosInstance";
import requests from "../API/apiRequests";
import imageUrl from "../API/imageUrl";

export default function Banner() {
  const [movieBanner, setMovieBanner] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await Axios.get(requests.originals);
      const data = await response.data.results; // array of data
      const randomBannerImage = Math.floor(Math.random() * 20);

      setMovieBanner(data[randomBannerImage]);
    }
    fetchData();
  }, []);

  //   console.log(movieBanner);

  return (
    <div>
      <header
        className="banner"
        style={{
          backgroundImage: `url(
                ${imageUrl}${movieBanner?.backdrop_path}
            )`,
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movieBanner?.title ||
              movieBanner?.name ||
              movieBanner?.orginal_name}
          </h1>

          <div className="banner_buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
          </div>

          <h1 className="banner__description">{movieBanner.overview}</h1>
        </div>
      </header>
    </div>
  );
}
