import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { InputText, Dropdown } from '../InputElements';
import CountryCard from '../Card';

import { fetchCountries } from '../../store/countries/reducer';

function Home() {
  const state = useSelector(async ({ countriesReducer }) => {
    const stateValues = await countriesReducer;

    if (stateValues) return stateValues.countries;

    return [];
  });
  const dispatch = useDispatch();

  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');

  const onInputChange = ({ target: { value } }) => {
    setSearch(value);
  };
  const onFilterChange = ({ value }) => {
    setFilter(value);
  };

  useEffect(() => {
    dispatch(fetchCountries);
  }, [dispatch]);

  useEffect(() => {
    Promise.resolve(state)
      .then((e) => {
        if (e) setItems(e);
      })
      .catch((err) => console.log('err', err));
  }, [state]);

  return (
    <div className="container flex flex-col h-full w-screen">
      <div className="mt-8 mx-3 desktop:mx-20 flex flex-col desktop:flex-row align-middle desktop:justify-between gap-8">
        <InputText value={search} onChange={onInputChange} />
        <Dropdown value={filter} onChange={onFilterChange} />
      </div>
      <div className="grid grid-cols-1 desktop:grid-cols-4 gap-x-6 mx-auto desktop:mx-20 my-8">
        {items
          .filter(
            (item) =>
              item.official.toLowerCase().includes(search.toLowerCase()) &&
              item.continents.some((c) => !filter || c.includes(filter))
          )
          .map((country) => (
            <CountryCard
              key={`country-card-${country.official}`}
              className="align-middle"
              img={`https://countryflagsapi.com/png/${country.code}`}
              title={country.official}
              code={country.code}
              countryInfoObject={{
                Population: country.population,
                Region: country.region,
                Capital: country.capital,
              }}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
