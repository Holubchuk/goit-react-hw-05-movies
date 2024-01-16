import axios from 'axios';

export async function requestTrending() {
  const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';
  const KEY = 'd425559355e0879fed139185dbbb845a';

  const response = await axios.get(`${BASE_URL}?api_key=${KEY}&language=en-US`);
  return response.data;
}

export const requestMovieDetailsById = async movieId => {
  const BASE_URL = 'https://api.themoviedb.org/3/movie/';
  const KEY = 'd425559355e0879fed139185dbbb845a';

  const response = await axios.get(
    `${BASE_URL}${movieId}?api_key=${KEY}&language=en-US`
  );
  return response.data;
};

export const requestMovieCast = async movieId => {
  const BASE_URL = 'https://api.themoviedb.org/3/movie/';
  const KEY = 'd425559355e0879fed139185dbbb845a';

  const response = await axios.get(
    `${BASE_URL}${movieId}/credits?api_key=${KEY}&language=en-US`
  );
  return response.data.cast;
};

export const requestMovieReviews = async movieId => {
  const BASE_URL = 'https://api.themoviedb.org/3/movie/';
  const KEY = 'd425559355e0879fed139185dbbb845a';

  const response = await axios.get(
    `${BASE_URL}${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  return response.data.results;
};

export const requestMovieByQuery = async SearchValue => {
  const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
  const KEY = 'd425559355e0879fed139185dbbb845a';

  const response = await axios.get(
    `${BASE_URL}?api_key=${KEY}&query=${SearchValue}&include_adult=false&language=en-US&page=1`
  );
  return response.data.results;
};
