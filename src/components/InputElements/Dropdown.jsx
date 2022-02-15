import React, { useState } from 'react';

import { Dropdown as DD } from 'primereact/dropdown';

export default function Dropdown() {
  const [value, setValue] = useState(null);

  const regions = [
    { label: 'Africa', value: 'Africa' },
    { label: 'America', value: 'America' },
    { label: 'Asia', value: 'Asia' },
    { label: 'Europe', value: 'Europe' },
    { label: 'Oceania', value: 'Oceania' },
  ];

  return (
    <DD
      {...{ value }}
      className="h-10 dark:bg-dark-blue dark:border-0 dark:text-white font-sans p-dropdown"
      placeholder="Filter by Region"
      options={regions}
      onChange={({ value: v }) => setValue(v)}
    />
  );
}
