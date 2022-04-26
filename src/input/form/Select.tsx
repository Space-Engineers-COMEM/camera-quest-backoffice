import React, { useEffect } from 'react';
import { FormInputType } from '../../types/FormInputType';

type SelectType = {
  options: string[];
  selected?: number; // Index of the selected option. Optional prop, but should be defined ideally. If undefined, the first element of the "options" array is selected.
};

export default function Select({ onChange, ...props }: FormInputType & SelectType) {
  useEffect(() => {
    // Select first element by default
    if (props.selected === undefined) {
      onChange!(0);
    }
  }, []);

  const handleChange = (event: any) => {
    onChange!(event.target.value);
  };

  /* Template */
  const displayContent = () => (
    <div className="form__input form__input--select">
      <label htmlFor={props.id}>{props.label}</label>
      <select defaultValue={props.selected} id={props.id} name={props.id} onChange={handleChange}>
        {props.options.map((option, index) => (
          <option key={option} value={index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );

  return displayContent();
}
