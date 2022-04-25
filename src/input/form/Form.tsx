import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { PoiType } from '../../types/PoiType';

const API_URL = process.env.REACT_APP_API_URL;

type FormType = {
  path: string;
  data: any;
  children: any;
};

export default function Form(props: FormType) {
  const { id } = useParams<'id'>();

  // POST request
  const post = (data: object, path: string) => {
    axios
      .post(`${API_URL}/${path}`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // PATCH request
  const patch = (data: object, path: string) => {
    axios
      .patch(`${API_URL}/${path}/${id}`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /**
   * Handle when the form is submitted
   * Trigger a PATCH or POST request according to the id of the path
   * @param {any} event - any - event that is triggered when the form is submitted.
   * @returns post or patch function according to whether the id is present.
   */
  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Each object send a request to the specified path
    props.data.map((item: { data: object; path: string }) => {
      if (id !== 'create') return patch(item.data, item.path);
      return post(item.data, item.path);
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
