import React, { useEffect, useState } from 'react';
import { FormInputType } from '../../types/FormInputType';

export default function Checkbox({ onChange, ...props }: FormInputType) {
  useEffect(() => {
    // Uncheck checkbox by default
    if (props.value === undefined) {
      onChange!(false);
    }
  });

  // Trigger when the checkbox is checked/unchecked
  const handleChange = (event: any) => {
    onChange!(event.target.checked);
  };

  // Template
  const displayView = () => (
    <div className="form__input form__input--checkbox">
      <input
        id={props.id}
        name={props.id}
        type="checkbox"
        defaultChecked={props.value}
        onChange={handleChange}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );

  return displayView();
}
