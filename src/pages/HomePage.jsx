import React from 'react'

import { requestTrending } from 'services/api';

const HomePage = () => {
    const featchPhotosByQuery = async () => {
        try {
          const data = await requestTrending();
          console.log(data);
        } catch (e) {
        }
      };
      featchPhotosByQuery();
  return (
    <div>HomePage
    </div>
  )
}

export default HomePage;
