import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from './MainRouter';
import Preloader from './Preloader';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleImagesLoaded = () => {
      const images = document.querySelectorAll('img');
      let loadedCount = 0;

      images.forEach((image) => {
        if (image.complete) {
          loadedCount++;
        } else {
          image.onload = () => {
            loadedCount++;
            if (loadedCount === images.length) {
              setLoading(false);
            }
          };
        }
      });

      if (loadedCount === images.length) {
        setLoading(false);
      }
    };

    handleImagesLoaded();
  }, []);

  return (
    <Router>
      {loading ? <Preloader /> : <MainRouter />}
    </Router>
  );
}


export default App;
