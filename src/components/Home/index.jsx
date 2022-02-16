import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { InputText, Dropdown } from '../InputElements';
import CountryCard from '../Card';

import { fetchCountries } from '../../store/countries/reducer';

function Home() {
  const state = useSelector(({ countriesReducer }) => countriesReducer);
  const dispatch = useDispatch();

  const [items, setItems] = useState([]);

  useEffect(() => {
    dispatch(fetchCountries);
  }, [dispatch]);

  useEffect(() => {
    Promise.resolve(state)
      .then((e) => {
        if (e) setItems(e.countries);
      })
      .catch((err) => console.log('err', err));
  }, [state]);

  useEffect(() => {
    console.log('items', items);
  }, [items]);

  return (
    <div className="container flex flex-col">
      <div className="mt-8 w-full flex flex-row justify-between">
        <InputText />
        <Dropdown />
      </div>
      <div className="grid grid-cols-4 gap-x-6 mx-12 my-8">
        {items.map((country) => (
          <CountryCard
            key={`country-card-${country.official}`}
            className="align-middle"
            img={`https://countryflagsapi.com/png/${country.un_code}`}
            title={country.official}
            countryInfoObject={{
              Population: country.population,
              Region: country.region,
              Capital: country.capital,
            }}
          />
        ))}
        <CountryCard
          img="https://countryflagsapi.com/png/276"
          title="Germany"
          countryInfoObject={{
            Population: '81.770.900',
            Region: 'Europe',
            Capital: 'Berlin',
          }}
        />
      </div>
    </div>
  );
}

export default Home;
