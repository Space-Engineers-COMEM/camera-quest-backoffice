import React from 'react';
import { FormInput } from '../../types/FormInput';

type TagsType = {
  tags: any[];
};

export default function Tags(props: TagsType & FormInput) {
  const displayView = () => (
    <div className="form__row">
      <label htmlFor={props.id}>{props.label}</label>
      <input id={props.id} type="search" />
      <div className="tags">
        {props.tags.map((tag) => (
          <span>{tag}</span>
        ))}
      </div>
    </div>
  );

  return displayView();
}
