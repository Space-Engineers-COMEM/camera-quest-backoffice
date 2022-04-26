import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Template
export default function PoiAdder() {
  const location = useLocation();

  return (
    <Link className="button button__add" to="create" state={{ backgroundLocation: location }}>
      <i className="fa-solid fa-plus" />
    </Link>
  );
}
