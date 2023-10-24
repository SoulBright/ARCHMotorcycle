import React from 'react';

import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';

import './styles/index.scss';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <About />
      <Footer />
    </div>
  );
};

export default App;
