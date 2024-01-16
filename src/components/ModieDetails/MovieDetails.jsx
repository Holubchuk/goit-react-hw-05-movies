import React from 'react';
import css from './MovieDetails.module.css';
import { Link, Routes, Route } from 'react-router-dom';

import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';
import { MovieDetailsItem } from 'components/MovieDetailsItem/MovieDetailsItem';

export const MovieDetails = ({ movieDetails }) => {
  return (
    <div>
      <MovieDetailsItem movieDetails={movieDetails} />
      <div className={css.addContainer}>
        <p className={css.addText}>Additional information</p>
        <Link to="cast" className={css.addLink}>
          Cast
        </Link>
        <Link to="reviews" className={css.addLink}>
          Reviews
        </Link>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </div>
    </div>
  );
};
