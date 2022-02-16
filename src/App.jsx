import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';

import store from './store';

import './App.css';
import Country from './components/Country';

function App() {
  return (
    <BrowserRouter>
      <Provider {...{ store }}>
        <div className="bg-very-light-gray dark:bg-very-dark-blue text-almost-black-blue dark:text-white text-sm font-sans">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:country" element={<Country />} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
