import axios from 'axios';

import opts from './countriesOpts.json';

const getCountries = async (state, action) => {
  const { ALL_COUNTRIES } = opts;

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
            borders,
            un_code: ccn3,
          })
        ),
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
