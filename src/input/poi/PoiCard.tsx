/* eslint-disable no-restricted-globals */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PoiTags from '../../content/poi/PoiTags';
import Modal from '../../layout/Modal';

type PoiProps = {
  id: number;
  title: string;
  imagePath: string;
  area: string;
};

export default function PoiCard(props: PoiProps) {
  const location = useLocation();

  return (
    <li>
      <button type="button">Supprimer</button>
      <br />
      <img alt="" src={props.imagePath} />
      <div>{props.title}</div>
      <div>Étage {props.area}</div>
      <PoiTags poiId={props.id} langId={1} />
      <Link to={String(props.id)} state={{ backgroundLocation: location }}>
        Modifier
      </Link>
      <hr />
    </li>
  );
}
