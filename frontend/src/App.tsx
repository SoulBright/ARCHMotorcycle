import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import { NotFound } from './pages/notFound/NotFound';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Bespoke } from './pages/bespoke/Bespoke';
import { Ownership } from './pages/ownership/Ownership';

import './styles/index.scss';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about/' element={<About />} />
        <Route path='bespoke/' element={<Bespoke />} />
        <Route path='ownership/' element={<Ownership />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
