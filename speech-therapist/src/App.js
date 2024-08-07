import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes, RouterProvider } from 'react-router-dom';
import MainRouter from './MainRouter';


function App() {
  return (
    <Router>
      <MainRouter />
    </Router>
  );
}

export default App;
