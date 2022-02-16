import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import scapeKeys from '../../data/countryKeysToScape.json';

export default function Country() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector(async ({ countriesReducer }) => {
    const values = await countriesReducer;

    return values.countryInfo;
  });

  const [country, setCountry] = useState({});
  const [title, setTitle] = useState('');

  const onButtonClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch({ type: 'GET_COUNTRY', payload: params.country });
  }, [dispatch, params.country]);

  useEffect(() => {
    Promise.resolve(state).then((e) => {
      if (e) {
        setTitle(e.official);

        setCountry(e);
      }
    });
  }, [state]);

  return (
    <div className="mx-8 mt-10 h-full desktop:h-screen">
      <button
        type="button"
        className="bg-white dark:bg-dark-blue dark:border-0 shadow-md rounded-sm border border-collapse py-1 px-5 justify-start"
        onClick={onButtonClick}
      >
        <span className="pi pi-arrow-left mr-3" />
        Back
      </button>
      <div className="flex flex-col desktop:flex-row mt-16 desktop:mt-10 max-w-screen-mobile desktop:max-w-screen-desktop">
        <img
          className="w-full desktop:w-3/6"
          src={`https://countryflagsapi.com/png/${params.country}`}
          alt="Germany"
        />
        <div className="desktop:px-16 py-10">
          <p className="font-bold text-xl">{title}</p>
          <div className="mt-5 grid desktop:grid-cols-2 gap-x-16">
            {Object.entries(country).map(
              ([k, v]) =>
                !scapeKeys.includes(k) && (
                  <p
                    className="font-semibold mb-2"
                    key={`country-paragraph-${k}-${v}`}
                  >
                    {k
                      .replace(/_/g, ' ')
                      .replace(/\w\S*/g, (w) =>
                        w.replace(/^\w/, (c) => c.toUpperCase())
                      )}
                    : <span className="font-normal">{v}</span>
                  </p>
                )
            )}
          </div>
          <div className="mt-10 flex flex-col desktop:flex-row gap-3">
            <p className="font-bold">Border Countries:</p>
            <div className="flex flex-wrap gap-1">
              {country.borders?.map(({ official, code }) => (
                <button
                  key={`country-button-${code}`}
                  type="button"
                  className="bg-white dark:bg-dark-blue dark:border-0 shadow border border-collapse px-3"
                  onClick={() =>
                    navigate(`/${code}`, { state: { country: code } })
                  }
                >
                  {official}
                </button>
              )) || <p>No border countries</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
