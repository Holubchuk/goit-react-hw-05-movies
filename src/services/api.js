import axios from "axios";

export async function requestTrending() {
    const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';
    const KEY = 'd425559355e0879fed139185dbbb845a';
  
  
    const response = await axios.get(`${BASE_URL}? api-key= ${KEY}` );
    console.log(response);
    return response.data;
  }