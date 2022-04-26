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

  /**
   * It takes a JSON object and returns a FormData object
   * @param {any} json - the json object that you want to convert to form data
   * @returns A new FormData object with the keys and values of the json object passed in.
   */
  const transformJSONtoFormData = (json: any) => {
    const formData = new FormData();
    Object.keys(json).forEach((key) => {
      formData.append(key, json[key]);
    });
    return formData;
  };

  /**
   * It takes in a data object, a path, and a method, and then it makes a request to the API
   * @param {any} data - The data you want to send to the server.
   * @param {string} path - The path to the API endpoint.
   * @param {any} method - The HTTP method to use.
   */
  const request = (data: any, path: string, method: any) => {
    const url = `${API_URL}/${path}/${method !== 'post' ? id : ''}`;
    let formData;
    if (data.type !== 'audio/mpeg') formData = transformJSONtoFormData(data);
    else formData = data;

    // Request
    axios({
      method,
      url,
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
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
    // Each object specified in the prop send a request to the specified path
    props.data.map((item: { data: any; path: string }) => {
      const method = id === 'create' ? 'post' : 'patch';
      if (!item.data) return;
      return request(item.data, item.path, method);
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
