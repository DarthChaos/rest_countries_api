import React from 'react';
import { Dropdown as DD } from 'primereact/dropdown';

import PropTypes from 'prop-types';

export default function Dropdown({ value, onChange }) {
  const regions = [
    { label: 'Africa', value: 'Africa' },
    { label: 'America', value: 'America' },
    { label: 'Asia', value: 'Asia' },
    { label: 'Europe', value: 'Europe' },
    { label: 'Oceania', value: 'Oceania' },
  ];

  return (
    <DD
      {...{ value, onChange }}
      className="h-10 dark:bg-dark-blue dark:border-0 dark:text-white font-sans p-dropdown"
      placeholder="Filter by Region"
      options={regions}
    />
  );
}

Dropdown.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
