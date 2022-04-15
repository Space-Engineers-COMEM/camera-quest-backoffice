import React from 'react';
import { FormInputType } from '../../types/FormInputType';

export default function InputText(props: FormInputType) {
  const displayView = () => (
    <div className="form__row">
      <label htmlFor={props.id}>{props.label}</label>
      <input id={props.id} name={props.id} type="text" defaultValue={props.value} />
    </div>
  );

  return displayView();
}
