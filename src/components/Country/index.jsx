import React from 'react';
import { useParams } from 'react-router-dom';

export default function Country() {
  const params = useParams();

  return <p>{params.country}</p>;
}
