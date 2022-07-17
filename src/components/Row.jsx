import React, { useState, useEffect } from "react";
import Axios from "../axiosInstance";
import imageUrl from "../API/imageUrl";
import YouTube from "react-youtube";
import { API_KEY } from "../API/apiRequests";

export default function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]); //array of objects of each orginals

  const [movieKey, setMovieKey] = useState("");

  // console.log(movies);

  useEffect(() => {
    async function fetchData() {
      const response = await Axios.get(fetchUrl);

      const data = await response.data;
      setMovies(data.results);
    }

    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovieTrailer = (movieId) => {
    Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
    ).then((response) => {
      if (response.data.results.length === 0) return;
      setMovieKey(response.data.results[0].key);
    });
  };

  return (
    //Youtube
    <div className="row">
      <h2>{title}</h2>

      {/* container ->Posters  */}

      <div className="row__posters">
        {movies.map((movieObj) => (
          <img
            onClick={() => {
              handleMovieTrailer(movieObj.id);
            }}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            key={movieObj.id}
            src={`${imageUrl}${
              isLargeRow ? movieObj.poster_path : movieObj.backdrop_path
            }`}
            alt=""
          />
        ))}
      </div>

      {/* Youtube  */}

      {movieKey && <YouTube videoId={movieKey} opts={opts} />}
    </div>
  );
}
