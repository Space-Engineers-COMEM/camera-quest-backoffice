import React from 'react';
import { FormInputType } from '../../types/FormInputType';

export default function InputText({ onChange, ...props }: FormInputType) {
  const handleChange = (event: any) => {
    onChange!(event.target.value);
  };

  const displayView = () => (
    <div className="form__row">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        name={props.id}
        type="text"
        defaultValue={props.value}
        onChange={handleChange}
      />
    </div>
  );

  return displayView();
}
