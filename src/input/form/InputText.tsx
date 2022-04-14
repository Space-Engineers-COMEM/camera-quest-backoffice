import React from 'react';
import { FormInput } from '../../types/FormInput';

export default function InputText(props: FormInput) {
  const displayView = () => (
    <div className="form__row">
      <label htmlFor={props.id}>{props.label}</label>
      <input id={props.id} name={props.id} type="text" value={props.value} />
    </div>
  );

  return displayView();
}
