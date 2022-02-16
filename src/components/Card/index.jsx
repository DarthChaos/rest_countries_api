import React from 'react';
import PropTypes from 'prop-types';

export default function CountryCard({ img, title, countryInfoObject }) {
  return (
    <div className="max-w-xs w-64 rounded overflow-hidden shadow-md my-2">
      <img className="w-full" src={img} alt="Germany" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-3">{title}</div>
        <div className="mb-5 flex flex-col">
          {Object.entries(countryInfoObject).map(([k, v]) => (
            <p
              className="font-semibold text-sm mb-2"
              key={`country-card-paragraph-${v}`}
            >
              {k}: <span className="font-normal">{v}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

CountryCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  countryInfoObject: PropTypes.shape({
    Population: PropTypes.string || PropTypes.number,
    Region: PropTypes.string,
    Capital: PropTypes.string,
  }).isRequired,
};
