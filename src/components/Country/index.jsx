import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

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
    <div className="container mx-8 mt-10 h-screen">
      <button
        type="button"
        className="dark:bg-dark-blue dark:border-0 shadow-md rounded-sm border border-collapse py-1 px-5 justify-start"
        onClick={onButtonClick}
      >
        <span className="pi pi-arrow-left mr-3" />
        Back
      </button>
      <div className="flex flex-row mt-10">
        <img
          className="w-2/5"
          src={`https://countryflagsapi.com/png/${params.country}`}
          alt="Germany"
        />
        <div className="px-16 py-10">
          <p className="font-bold text-xl">{title}</p>
          <div className="mt-5 grid grid-cols-2 gap-x-16">
            {Object.entries(country).map(
              ([k, v]) =>
                !['official', 'code', 'cca3', 'borders'].includes(k) && (
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
          <div className="mt-10 flex flex-row gap-3">
            <p className="font-semibold">Border Countries:</p>
            <div>
              {country.borders?.map(({ official, code }) => (
                <button
                  key={`country-button-${code}`}
                  type="button"
                  className="shadow border border-collapse px-3"
                  onClick={() =>
                    navigate(`/${code}`, { state: { country: code } })
                  }
                >
                  {official}
                </button>
              )) || null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
