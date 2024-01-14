import React from 'react'
import { useState, useEffect } from 'react';

import { Loader } from '../components/Loader/Loader';
import { STATUSES } from '../services/constants';
import { Searchbar } from 'components/SearchBar/SearchBar';
import { MoviesList } from 'components/MoviesList/MoviesList';

import { requestMovieByQuery } from 'services/api';



const MoviesPage = () => {
  const [searchMovies, setsearchMovies] = useState([]);
  const [status, setStatus] = useState(STATUSES.idle);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const fetchTrendingMovies = async (searchValue) => {
      try {
        setStatus(STATUSES.pending);
        const responseData = await requestMovieByQuery(searchValue);
        setsearchMovies(responseData);
        console.log(responseData);
        setStatus(STATUSES.success);
      } catch (error) {
        setStatus(STATUSES.error);
      }
    };
    if (searchValue === '' ) return;
    fetchTrendingMovies(searchValue);
  }, [searchValue]);

  const handleSubmit = e => {
    e.preventDefault();

    const searchValue = e.currentTarget.elements.search.value;

    setSearchValue(searchValue);
    setsearchMovies([]);
    e.target.reset();
  };

  return (
    <div>
      <Searchbar handleSubmit={handleSubmit} />
      {status === STATUSES.pending && <Loader />}
      {status === STATUSES.success && <MoviesList trending={searchMovies} searchMovies={searchMovies} />}
    </div>
  )
}

export default MoviesPage;
