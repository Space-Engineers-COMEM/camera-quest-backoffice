import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { PoiType } from '../../types/PoiType';

const API_URL = process.env.REACT_APP_API_URL;

export default function Form(props: any) {
  const { id } = useParams<'id'>();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    axios
      .patch(`${API_URL}/pois/${id}`, props.data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /* Template */
  const displayView = () => (
    <form className="form" onSubmit={handleSubmit}>
      {props.children}
    </form>
  );

  return displayView();
}
