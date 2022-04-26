import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';

type SubmitProp = {
  title: string;
};

export default function Submit(props: SubmitProp) {
  const navigator = useNavigate();

  /* Template */
  const displayView = () => (
    <button type="submit" className="button button__modal" onClick={() => navigator(-1)}>
      {props.title}
    </button>
  );

  return displayView();
}
