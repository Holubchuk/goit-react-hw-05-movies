import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import css from './MoviesList.module.css';

export const MoviesList = ({ trending }) => {
  const location = useLocation();
  return (
    <div className={css.movieListContainer}>
      {Array.isArray(trending) &&
        trending.map(movie => (
          <li key={movie.id} className={css.trendingItem}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location }}
              className={css.trendingLink}
            >
              <img
                src={
                  movie.backdrop_path
                    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                    : 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=420x236'
                }
                alt={movie.title}
                className={css.detailsImg}
              />
              <p className={css.listText}>{movie.title} ({new Date(movie.release_date).getFullYear()})</p>
            </Link>
          </li>
        ))}
    </div>
  );
};
