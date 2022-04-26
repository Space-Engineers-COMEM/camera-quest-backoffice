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

  const request = (data: any, path: string, method: any) => {
    const url = `${API_URL}/${path}/${method !== 'post' ? id : ''}`;
    let headers = { 'Content-Type': 'application/json' };

    // Adapt request if file type is audio or image
    if (data.type) {
      let type = 'image';
      if (data.type === 'audio/mpeg') type = 'audio';
      const formData = new FormData();
      formData.append(type, data);
      data = formData;
      headers = { 'Content-Type': 'multipart/form-data' };
    }

    // Request
    axios({
      method,
      url,
      data,
      headers,
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
