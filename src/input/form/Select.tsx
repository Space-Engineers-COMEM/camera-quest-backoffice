import React from 'react';
import { FormInputType } from '../../types/FormInputType';

type SelectType = {
  options: string[];
  selected?: number; // Index of the selected option. Optional prop, but should be defined ideally. If undefined, the first element of the "options" array is selected.
};

export default function Select(props: FormInputType & SelectType) {
  /* Template */
  const displayContent = () => (
    <div className="form__row">
      <label htmlFor={props.id}>{props.label}</label>
      <select defaultValue={props.selected || 0} id={props.id} name={props.id}>
        {props.options.map((option, index) => (
          <option key={option} defaultValue={index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );

  return displayContent();
}
