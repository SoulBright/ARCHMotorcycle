import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './styles/index.scss';

import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import { NotFound } from './pages/notFound/NotFound';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Bespoke } from './pages/bespoke/Bespoke';
import { Ownership } from './pages/ownership/Ownership';
import { KRGT1 } from './pages/krgt-1/KRGT1';
import { OneS } from './pages/1s/1s';
import { Method143 } from './pages/method143/Method143';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about/' element={<About />} />
        <Route path='bespoke/' element={<Bespoke />} />
        <Route path='ownership/' element={<Ownership />} />
        <Route path='arch-krgt-1/' element={<KRGT1 />} />
        <Route path='arch-1s/' element={<OneS />} />
        <Route path='arch-method143/' element={<Method143 />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
