import React from 'react';
import PropTypes from 'prop-types';

export default function InputText({ value, onChange }) {
  return (
    <div className="w-full desktop:w-1/3 relative rounded-md shadow-md align-middle">
      <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
        <span className="pi pi-search text-gray-500 sm:text-sm" />
      </div>
      <input
        {...{ value, onChange }}
        type="text"
        placeholder="Search for a country..."
        className="block w-full pl-14 py-2 dark:bg-dark-blue sm:text-sm border-gray-300 rounded-md"
      />
    </div>
  );
}

InputText.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
