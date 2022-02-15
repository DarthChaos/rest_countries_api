import React from 'react';

import Header from './components/Header';
import Home from './components/Home';

import './App.css';

function App() {
  return (
    <div className="bg-gray-50 dark:bg-slate-700 font-sans">
      <Header />
      <Home />
    </div>
  );
}

export default App;
