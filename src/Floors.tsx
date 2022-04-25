import React from 'react';
import { Link } from 'react-router-dom';
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
    <>
      <Link className="return__link" to="/">
        Retour
      </Link>
      <h1>Liste des étages</h1>
      <div className="col-10 mx-auto">
        <div className="row">
          {floors.map((floor) => (
            <div className="col-5 card py-4 px-3 mx-4 my-3">
              <Floor key={floor.id} id={floor.id} name={`${floor.id}. ${floor.name}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
