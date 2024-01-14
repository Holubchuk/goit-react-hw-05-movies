import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import css from './MoviesList.module.css';

export const MoviesList = ({ trending }) => {
  const location = useLocation();
  return (
    <div>
      {Array.isArray(trending) &&
        trending.map(movie => (
          <li key={movie.id} className={css.trendingItem}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location }}
              className={css.trendingLink}
            >
              {movie.title}
            </Link>
          </li>
        ))}
    </div>
  );
};
