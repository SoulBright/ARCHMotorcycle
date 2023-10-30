import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import { NotFound } from './pages/notFound/NotFound';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';


import './styles/index.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about/' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
