import React from 'react';

export const MovieDetails = ({ movieDetails }) => {
  return (
    <div>
      <h3>Title: {movieDetails.title}</h3>
      <img
        width="300px"
        src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
        alt={movieDetails.title}
      />
      <p>User vote: {movieDetails.vote_average}</p>
      <p>Overview</p>
      <p>{movieDetails.overview}</p>
      <p>Genres: {movieDetails.genres.map(genre => genre.name).join(', ')}</p>
    </div>
  );
};
