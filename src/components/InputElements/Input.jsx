import React from 'react';

export default function InputText() {
  return (
    <div className="ml-10 w-1/3 relative rounded-md shadow-md align-middle">
      <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
        <span className="pi pi-search text-gray-500 sm:text-sm" />
      </div>
      <input
        type="text"
        placeholder="Search for a country..."
        className="block w-full pl-14 py-2 dark:bg-dark-blue sm:text-sm border-gray-300 rounded-md"
      />
    </div>
  );
}
