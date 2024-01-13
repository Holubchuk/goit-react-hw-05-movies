import { Routes, Route } from "react-router-dom";

import { Layout } from "./Layout/Layout";

import HomePage from "pages/HomePage";
import MoviesPage from "pages/MoviesPage";
import MovieDetailsPage from "pages/MovieDetailsPage";



export const App = () => {
  return (
    <Layout>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
      </Routes>
    </Layout>
  );
};
