import React, { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import floors from './storage/floors.json';

export default function FloorDetail() {
  // React.useEffect(() => {
  //   console.log('params', idEtage);
  // }, [idEtage]);
  // const { idEtage } = this.props.match.params;

  const idEtage = Number(useParams().id);
  // const floors = [
  //   {
  //     id: 1,
  //     name: '1. Étage jaune',
  //   },
  //   {
  //     id: 2,
  //     name: '2. Étage bleu',
  //   },
  //   {
  //     id: 3,
  //     name: '3. Étage rouge',
  //   },
  //   {
  //     id: 4,
  //     name: '4. Étage gris',
  //   },
  //   {
  //     id: 5,
  //     name: '5. Exposition temporaire',
  //   },
  //   {
  //     id: 6,
  //     name: '6. Histoire projection',
  //   },
  // ];
  console.log(idEtage);
  console.log(floors.length);
  console.log(idEtage < 1 || idEtage > floors.length);
  React.useEffect(() => {
    if (idEtage < 1 || idEtage > floors.length) {
      console.log('redirecting..');
      const navigate = useNavigate();
      navigate('../../');
    }
  });

  return <h1>{`${idEtage}. ${floors[idEtage - 1].name}`}</h1>;
}
