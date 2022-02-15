import React from 'react';
import { InputText, Dropdown } from '../InputElements';

function Home() {
  return (
    <div className="container mt-8 w-full flex flex-row justify-between">
      <InputText />
      <Dropdown />
    </div>
  );
}

export default Home;
