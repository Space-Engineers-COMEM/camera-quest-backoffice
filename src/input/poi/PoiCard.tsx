import React from 'react';
import PoiTags from '../../content/poi/PoiTags';

type PoiProps = {
  id: number;
  title: string;
  imagePath: string;
  area: string;
};

export default function PoiDetail(props: PoiProps) {
  return (
    <li>
      <button type="button">Supprimer</button>
      <img alt="" src={props.imagePath} />
      <div>{props.title}</div>
      <div>Étage {props.area}</div>
      <PoiTags poiId={props.id} langId={1} />
      <button type="button">Modifier</button>
    </li>
  );
}
