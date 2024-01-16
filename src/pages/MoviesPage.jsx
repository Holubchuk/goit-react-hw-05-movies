import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Loader } from '../components/Loader/Loader';
import { STATUSES } from '../services/constants';
import { Searchbar } from 'components/SearchBar/SearchBar';
import { MoviesList } from 'components/MoviesList/MoviesList';

import { requestMovieByQuery } from 'services/api';

const MoviesPage = () => {
  const [searchMovies, setsearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [status, setStatus] = useState(STATUSES.idle);

  const query = searchParams.get('query');

  useEffect(() => {
    if (query === null) return;

    const fetchMovieByQuery = async query => {
      try {
        setStatus(STATUSES.pending);
        const responseData = await requestMovieByQuery(query);
        setsearchMovies(responseData);
        setStatus(STATUSES.success);
      } catch (error) {
        setStatus(STATUSES.error);
      }
    };

    fetchMovieByQuery(query);
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();

    const searchValue = e.currentTarget.elements.search.value;

    setsearchMovies([]);
    setSearchParams({
      query: searchValue,
    });
    e.target.reset();
  };

  return (
    <div>
      <Searchbar handleSubmit={handleSubmit} />
      {status === STATUSES.pending && <Loader />}
      {status === STATUSES.success && <MoviesList trending={searchMovies} />}
    </div>
  );
};

export default MoviesPage;
