import React from 'react';
import { FormInputType } from '../../types/FormInputType';

export default function Checkbox({ onChange, ...props }: FormInputType) {
  const handleChange = (event: any) => {
    onChange!(event.target.checked);
  };

  const displayView = () => (
    <div className="form__row">
      <input
        id={props.id}
        name={props.id}
        type="checkbox"
        checked={props.value}
        onChange={handleChange}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );

  return displayView();
}
