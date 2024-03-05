import React from 'react';
import { useState, useEffect } from 'react';

import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from '../components/Loader/Loader';
import { STATUSES } from '../services/constants';

import { requestTrending } from 'services/api';

const HomePage = () => {
  const [trending, setTrending] = useState([]);
  const [status, setStatus] = useState(STATUSES.idle);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setStatus(STATUSES.pending);
        const { results } = await requestTrending();
        setTrending(results);
        setStatus(STATUSES.success);
      } catch (error) {
        setStatus(STATUSES.error);
        console.error('Error fetching data:', error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      {status === STATUSES.pending && <Loader />}
      {status === STATUSES.success && (
        <>
          <p style={{ textAlign: 'center', marginTop: '0', fontWeight: 700, fontSize: '48px' }}>
            Trending today
          </p>
          <MoviesList trending={trending} />
        </>
      )}
    </div>
  );
};

export default HomePage;
