import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import css from './Cast.module.css';

import { requestMovieCast } from 'services/api';
import { STATUSES } from 'services/constants';
import { Loader } from '../Loader/Loader';

export const Cast = () => {
  const { movieId } = useParams();
  const [moviesCast, setMoviesCast] = useState([]);
  const [status, setStatus] = useState(STATUSES.idle);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        setStatus(STATUSES.pending);
        const movieDataCast = await requestMovieCast(movieId);
        setMoviesCast(movieDataCast);
        setStatus(STATUSES.success);
      } catch (error) {
        setStatus(STATUSES.error);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <div className={css.castContainer}>
      {status === STATUSES.pending && <Loader />}
      {status === STATUSES.success &&
      Array.isArray(moviesCast) &&
      moviesCast.length > 0
        ? moviesCast.map(movie => (
            <ul key={movie.id} className={css.castList}>
              <li className={css.castItem}>
                <img
                  src={
                    movie.profile_path
                      ? `https://image.tmdb.org/t/p/original${movie.profile_path}`
                      : 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
                  }
                  alt={movie.name}
                  className={css.castImg}
                />
                <p className={css.castText}>{movie.name}</p>
                <p className={css.castText}>
                  <span className={css.castSpan}>Character: </span>{' '}
                  {movie.character}
                </p>
              </li>
            </ul>
          ))
        : status === STATUSES.success && (
            <p className={css.noCastMessage}>
              No cast available for this movie
            </p>
          )}
    </div>
  );
};
