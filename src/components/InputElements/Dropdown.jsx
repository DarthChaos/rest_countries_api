import React from 'react';
import { Dropdown as DD } from 'primereact/dropdown';

import PropTypes from 'prop-types';

export default function Dropdown({ value, onChange, options }) {
  return (
    <DD
      {...{ value, onChange, options }}
      className="h-10 dark:bg-dark-blue dark:border-0 dark:text-white font-sans text-sm"
      placeholder="Filter by Region"
      panelClassName="dark:bg-dark-blue dark:border-0 dark:text-white text-sm"
    />
  );
}

Dropdown.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.shape([
    {
      label: PropTypes.string,
      value: PropTypes.string,
    },
  ]).isRequired,
};
