import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
// import * as fs from 'fs';
import floors from './storage/floors.json';

export default function FloorDetail() {
  const idEtage = Number(useParams().id);

  // console.log(idEtage);
  // console.log(floors.length);
  // console.log(idEtage < 1 || idEtage > floors.length);
  // React.useEffect(() => {
  //   if (idEtage < 1 || idEtage > floors.length) {
  //     console.log('redirecting..');
  //     const navigate = useNavigate();
  //     navigate('../../');
  //   }
  // });

  let fullFloorName;
  const [floorNameText, setValue] = useState(floors[idEtage - 1].name);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // fullFloorName = `${idEtage}. ${floorNameText}`;
    floors[idEtage - 1].name = floorNameText;
    console.log(floors);
    // fs.writeFile('./myFile.json', JSON.stringify(floors), (err) => {
    //   if (err) console.log('Error writing file:', err);
    // });
  };
  return (
    <>
      <Link className="return__link" to="/etages">
        Retour
      </Link>
      <h1>Modifier : {floors[idEtage - 1].name}</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="floorNameText">
          Nom
          <br />
          <input
            type="text"
            value={floorNameText}
            onChange={(e) => setValue(e.target.value)}
            name="floorNameText"
            id="floorNameText"
            required
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {floorNameText}
    </>
  );
}
