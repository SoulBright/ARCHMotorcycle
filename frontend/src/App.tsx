import React from 'react';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import { Home } from './pages/home/Home';

import './styles/index.scss'

function App() {
  return (
    <div className="App">
        <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
