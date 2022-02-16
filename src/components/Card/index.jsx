import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function CountryCard({ img, title, code, countryInfoObject }) {
  const navigate = useNavigate();

  const onCardClick = () => {
    navigate(`/${code}`, { state: { country: code } });
  };

  return (
    <div
      className="max-w-xs w-64 rounded overflow-hidden shadow-md my-2 dark:bg-dark-blue"
      onClick={onCardClick}
      aria-hidden
    >
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
  code: PropTypes.string.isRequired,
  countryInfoObject: PropTypes.shape({
    Population: PropTypes.string || PropTypes.number,
    Region: PropTypes.string,
    Capital: PropTypes.string,
  }).isRequired,
};
