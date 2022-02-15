import React from 'react';

import { Provider } from 'react-redux';

import Header from './components/Header';
import Home from './components/Home';

import store from './store';

import './App.css';

function App() {
  return (
    <Provider {...{ store }}>
      <div className="bg-very-light-gray dark:bg-very-dark-blue text-almost-black-blue dark:text-white text-sm font-sans">
        <Header />
        <Home />
      </div>
    </Provider>
  );
}

export default App;
