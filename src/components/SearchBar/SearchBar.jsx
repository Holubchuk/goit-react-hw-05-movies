import React from 'react';
import css from './SearchBar.module.css';

export const Searchbar = ({ handleSubmit }) => {
  return (
    <form className={css.searchForm} onSubmit={handleSubmit}>
      <input
        className={css.searchFormInput}
        name="search"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        required
      />
      <button type="submit" className={css.searchFormButton}>
        Search
      </button>
    </form>
  );
};
