import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import css from './Reviews.module.css';

import { requestMovieReviews } from 'services/api';
import { STATUSES } from 'services/constants';
import { Loader } from '../Loader/Loader';

export const Reviews = () => {
  const { movieId } = useParams();
  const [moviesReviews, setMoviesReviews] = useState([]);
  const [status, setStatus] = useState(STATUSES.idle);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        setStatus(STATUSES.pending);
        const movieDataReviews = await requestMovieReviews(movieId);
        setMoviesReviews(movieDataReviews);
        setStatus(STATUSES.success);
      } catch (error) {
        setStatus(STATUSES.error);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <div className={css.reviewsContainer}>
      {status === STATUSES.pending && <Loader />}
      {Array.isArray(moviesReviews) && moviesReviews.length > 0 ? (
        moviesReviews.map(movie => (
          <ul key={movie.id} className={css.reviewsList}>
            <li className={css.reviewsItem}>
              <p className={css.reviewsAuthor}>{movie.author}</p>
              <p className={css.reviewsContent}>{movie.content}</p>
            </li>
          </ul>
        ))
      ) : (
        <p className={css.noReviewsMessage}>No reviews available for this movie</p>
      )}
    </div>
  );
};
