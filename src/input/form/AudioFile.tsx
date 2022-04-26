import React from 'react';
import { FormInputType } from '../../types/FormInputType';

export default function AudioFile({ onChange, ...props }: FormInputType) {
  const onSelectFile = (event: any) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }
    onChange!(event.target.files[0]);
  };

  const displayView = () => (
    <div className="form__input form__input--audio">
      <label htmlFor={props.id}>{props.label}</label>
      <small>{props.value[0] ? `Fichier actuel: ${props.value[0].name}` : ''}</small>
      <input id={props.id} type="file" accept="audio/*" onChange={onSelectFile} />
    </div>
  );

  return displayView();
}
