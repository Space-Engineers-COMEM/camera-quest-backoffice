import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { PoiType } from '../../types/PoiType';

const API_URL = process.env.REACT_APP_API_URL;

export default function Form(props: any) {
  const [data, setData] = useState<PoiType>();

  const post = (event: any) => {
    event.preventDefault();
    axios
      .post(`${API_URL}/pois/`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /* Template */
  const displayView = () => (
    <form className="form" onSubmit={post}>
      {props.children}
    </form>
  );

  return displayView();
}
