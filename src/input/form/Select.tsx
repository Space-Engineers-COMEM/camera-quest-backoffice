import React from 'react';
import { FormInputType } from '../../types/FormInputType';

export default function Select() {
  const displayContent = () => (
    <div className="form__row">
      <label htmlFor="floor">Étage</label>
      <select id="floor" name="">
        <option value="1">Étage 1</option>
        <option value="2">Étage 2</option>
      </select>
    </div>
  );

  return displayContent();
}
