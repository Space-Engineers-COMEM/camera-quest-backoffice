import { fork } from 'child_process';
import React from 'react';
import { Link } from 'react-router-dom';

type FloorProps = {
  id: number;
  name: string;
};

export default function Floor(props: FloorProps) {
  return (
    <div>
      <h2>{props.name}</h2>
      <a href={`etage/${props.id}`}>Modifier</a>
      {/* <Link to={`${props.id}`} key={props.id}>
        Modifier
      </Link> */}
    </div>
  );
}
