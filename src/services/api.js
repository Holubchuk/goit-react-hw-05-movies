import axios from 'axios';

export async function requestTrending() {
  const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';
  const KEY = 'd425559355e0879fed139185dbbb845a';

  const response = await axios.get(`${BASE_URL}?api_key=${KEY}`);
  return response.data;
}

export const requestMovieDetailsById = async movieId => {
  const BASE_URL = 'https://api.themoviedb.org/3/movie/';
  const KEY = 'd425559355e0879fed139185dbbb845a';

  const response = await axios.get(`${BASE_URL}${movieId}?api_key=${KEY}`);
  return response.data;
};

export const requestMovieCast = async movieId => {
  const BASE_URL = 'https://api.themoviedb.org/3/movie/';
  const KEY = 'd425559355e0879fed139185dbbb845a';

  const response = await axios.get(`${BASE_URL}${movieId}/credits?api_key=${KEY}`);
  return response.data.cast;
};

export const requestMovieReviews = async movieId => {
  const BASE_URL = 'https://api.themoviedb.org/3/movie/';
  const KEY = 'd425559355e0879fed139185dbbb845a';

  const response = await axios.get(`${BASE_URL}${movieId}/reviews?api_key=${KEY}`);
  return response.data.results;
};
