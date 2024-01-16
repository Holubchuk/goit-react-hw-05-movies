import React from 'react';
import css from '../ModieDetails/MovieDetails.module.css';

export const MovieDetailsItem = ({ movieDetails }) => {
  return (
    <div className={css.detailsContainer}>
      <img
        src={
          movieDetails.backdrop_path
            ? `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
            : 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
        }
        alt={movieDetails.title}
        className={css.detailsImg}
      />
      <h3 className={css.detailsTitle}>
        {movieDetails.title} (
        {new Date(movieDetails.release_date).getFullYear()})
      </h3>
      <p className={css.detailsVote}>
        <span className={css.detailsSpan}>User vote: </span>
        {movieDetails.vote_average}
      </p>
      <p className={css.detailsOverview}>Overview</p>
      <p className={css.detailsOverViewText}>{movieDetails.overview}</p>
      <p className={css.detailsGenres}>Genres</p>
      <p className={css.detailsGenresText}>
        {movieDetails.genres.map(genre => genre.name).join(', ')}
      </p>
    </div>
  );
};
