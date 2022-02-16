import axios from 'axios';

import opts from '../../data/countriesOpts.json';

const getCountries = async (state, action) => {
  const { ALL_COUNTRIES, GET_COUNTRY } = opts;

  switch (action.type) {
    case ALL_COUNTRIES: {
      const { payload } = action;

      return {
        ...state,
        countries: payload.map(
          ({
            name: { nativeName, official },
            population,
            region,
            subregion,
            capital,
            continents,
            tld,
            currencies,
            languages,
            borders,
            ccn3,
            cca3,
          }) => ({
            official,
            // eslint-disable-next-line
            native_name: Object.values(nativeName || {})[0]?.common || '',
            population,
            region,
            sub_region: subregion,
            capital,
            continents,
            top_level_domain: tld,
            // eslint-disable-next-line
            currencies: Object.values(currencies || {})[0]?.name || '',
            languages: Object.values(languages || {}).join(', '),
            borders: borders || [],
            code: ccn3,
            cca3,
          })
        ),
      };
    }

    case GET_COUNTRY: {
      const filterState = await state;

      const countryInfo = {
        ...filterState.countries.filter((c) => c.code === action.payload)[0],
      };

      countryInfo.borders = countryInfo.borders.map((cca3Code) => {
        const borderCountries = filterState.countries.filter(
          ({ cca3 }) => cca3 === cca3Code
        )[0];

        return {
          official: borderCountries.official,
          code: borderCountries.code,
        };
      });

      return {
        ...filterState,
        countryInfo,
      };
    }

    default:
      return state;
  }
};

export const fetchCountries = async (dispatch) => {
  const response = await axios.get('https://restcountries.com/v3.1/all');

  dispatch({ type: 'ALL_COUNTRIES', payload: response.data });
};

export default getCountries;
