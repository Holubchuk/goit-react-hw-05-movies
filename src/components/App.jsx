import { Routes, Route } from "react-router-dom";

import { Layout } from "./Layout/Layout";

import HomePage from "pages/HomePage";
import MoviesPage from "pages/MoviesPage";



export const App = () => {
  return (
    <Layout>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </Layout>
  );
};
