import React from 'react';
import Floor from './components/Floor';
import floors from './storage/floors.json';

export default function Floors() {
  function compare(a: { id: number }, b: { id: number }) {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  }

  floors.sort(compare);

  return (
    <ul>
      {floors.map((floor) => (
        <Floor key={floor.id} id={floor.id} name={`${floor.id}. ${floor.name}`} />
      ))}
    </ul>
  );
}
