import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

import { requestMovieDetailsById } from '..//services/api';
import { STATUSES } from '../services/constants';
import { Loader } from 'components/Loader/Loader';
import { MovieDetails } from 'components/ModieDetails/MovieDetails';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movieDetails, setMovieDetails] = useState(null);
  const [status, setStatus] = useState(STATUSES.idle); // "idle" | "pending" | "success" | "error"
  const backLinkRef = useRef(location.state?.from ?? '/movies?query');

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
      <Link to={backLinkRef.current}>Go back</Link>
      {status === STATUSES.pending && <Loader />}
      {status === STATUSES.success && (
        <MovieDetails movieDetails={movieDetails} />
      )}
    </div>
  );
};

export default MovieDetailsPage;
