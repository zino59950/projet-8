import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error404 from './pages/Error404';
import Location from './pages/Location';
import Card from './components/Card';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='location/:id' element={<Location />} />
        <Route path='*' element={<Error404 />} />
        {/* Placez le composant Card à l'intérieur de la structure Routes */}
        <Route path='/' element={<Card />} />
      </Routes>
    </Router>
  );
};

export default App;

