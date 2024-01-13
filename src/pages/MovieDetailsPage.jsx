import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { requestMovieDetailsById } from '..//services/api';
import { STATUSES } from '../services/constants';
import { Loader } from 'components/Loader/Loader';
import { MovieDetails } from 'components/ModieDetails/MovieDetails';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [status, setStatus] = useState(STATUSES.idle); // "idle" | "pending" | "success" | "error"

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setStatus(STATUSES.pending);
        const movieData = await requestMovieDetailsById(movieId);
        setMovieDetails(movieData);
        setStatus(STATUSES.success);
      } catch (error) {
        setStatus(STATUSES.error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);
  return (
    <div>
      {status === STATUSES.pending && <Loader />}
      {status === STATUSES.success && (
        <MovieDetails movieDetails={movieDetails} />
      )}
    </div>
  );
};

export default MovieDetailsPage;
