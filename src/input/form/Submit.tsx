import React, { useState } from 'react';

type SubmitProp = {
  title: string;
};

export default function Submit(props: SubmitProp) {
  /* Template */
  const displayView = () => (
    <button type="submit" className="button button__modal">
      {props.title}
    </button>
  );

  return displayView();
}
