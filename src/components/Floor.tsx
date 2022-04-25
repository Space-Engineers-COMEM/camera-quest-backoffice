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
      <h1 className="mt-0 mb-4">{props.name}</h1>
      <Link to={`./${props.id}`}>
        <button type="button" className="button w-100 primary">
          Modifier
        </button>{' '}
      </Link>
      {/* <Link to={`${props.id}`} key={props.id}>
        Modifier
      </Link> */}
    </div>
  );
}
