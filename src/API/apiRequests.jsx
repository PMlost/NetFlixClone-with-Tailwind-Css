const API_KEY = `8e3b8deb9e2311fd9a7219ed35d978a1`;

const requests = {
  trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  action: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  originals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  comedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  horrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  romanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export { API_KEY };
export default requests;
