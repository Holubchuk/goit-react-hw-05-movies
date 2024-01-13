import React from 'react';
import { Link } from 'react-router-dom';

import css from './MoviesList.module.css';

export const MoviesList = ({ trending }) => {

  return (
    <div>
      <p className={css.trendingTitle}>Trending today</p>
      {Array.isArray(trending) &&
      trending.map(movie => (
        <li key={movie.id} className={css.trendingItem}>
          <Link to={`/movies/${movie.id}`} className={css.trendingLink}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
};
