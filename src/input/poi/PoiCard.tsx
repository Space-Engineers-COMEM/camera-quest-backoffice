/* eslint-disable no-restricted-globals */
import axios from 'axios';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PoiTags from '../../content/poi/PoiTags';

const API_URL = process.env.REACT_APP_API_URL;

type PoiProps = {
  id: number;
  title: string;
  imageUrl: string;
  area: number;
};

export default function PoiCard(props: PoiProps) {
  const location = useLocation();

  const handleClick = () => {
    axios
      .delete(`${API_URL}/pois/${props.id}`)
      .then((res: any) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <li>
      <button type="button" onClick={handleClick}>
        Supprimer
      </button>
      <br />
      <img alt="" src={props.imageUrl} />
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
