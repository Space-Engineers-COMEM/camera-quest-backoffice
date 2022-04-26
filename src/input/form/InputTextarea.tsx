import React from 'react';
import { FormInputType } from '../../types/FormInputType';

export default function InputText(props: FormInputType) {
  const displayView = () => (
    <div className="form__input form__input--textarea">
      <label htmlFor={props.id}>{props.label}</label>
      <textarea id={props.id} name={props.id} defaultValue={props.value} />
    </div>
  );

  return displayView();
}
