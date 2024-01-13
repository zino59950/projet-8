// Importe React depuis la bibliothèque React
import React from 'react';
// Importe BrowserRouter, Routes, et Route depuis 'react-router-dom'
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
        <Route path='/' element={<Card />} />
      </Routes>
    </Router>
  );
};

// Exporte le composant App pour pouvoir l'utiliser ailleurs dans l'application
export default App;


