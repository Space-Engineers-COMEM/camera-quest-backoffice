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
      <button className="button__delete" type="button" onClick={handleClick}>
        <i className="fa-solid fa-trash-can" />
      </button>
      <img alt="" src={props.imageUrl} />
      <div className="poiDataContainer">
        <div className="poiTitle">{props.title}</div>
        <div className="poiStage">Étage {props.area}</div>
        <PoiTags poiId={props.id} langId={1} />
        <Link
          className="button button__edit"
          to={String(props.id)}
          state={{ backgroundLocation: location }}
        >
          Modifier
        </Link>
      </div>
    </li>
  );
}
