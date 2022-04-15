import React from 'react';
import { FormInputType } from '../../types/FormInputType';

type SelectType = {
  options: string[];
  selected: number | undefined; // id of the selected option. If undefined, the first element of the "options" array is selected.
};

export default function Select(props: FormInputType & SelectType) {
  /* Template */
  const displayContent = () => (
    <div className="form__row">
      <label htmlFor={props.id}>{props.label}</label>
      <select value={props.selected || 0} id={props.id} name={props.id}>
        {props.options.map((option, index) => (
          <option value={index}>{option}</option>
        ))}
      </select>
    </div>
  );

  return displayContent();
}
