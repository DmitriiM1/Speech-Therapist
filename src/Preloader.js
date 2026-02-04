import React from 'react';
import { Circles } from 'react-loader-spinner';

const Preloader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Circles
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="loading"
      />
    </div>
  );
};

export default Preloader;
