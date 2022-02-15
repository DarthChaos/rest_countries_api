import React from 'react';

import { InputText, Dropdown } from '../InputElements';
import CountryCard from '../Card';

function Home() {
  return (
    <div className="container flex flex-col">
      <div className="mt-8 w-full flex flex-row justify-between">
        <InputText />
        <Dropdown />
      </div>
      <div className="mt-8 mx-10">
        <CountryCard
          img="https://countryflagsapi.com/png/276"
          title="Germany"
          countryInfoObject={{
            Population: 81770900,
            Region: 'Europe',
            Capital: 'Berlin',
          }}
        />
      </div>
    </div>
  );
}

export default Home;
