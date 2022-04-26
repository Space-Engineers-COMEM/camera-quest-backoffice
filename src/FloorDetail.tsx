import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
// import * as fs from 'fs';
import floors from './storage/floors.json';

export default function FloorDetail() {
  const idEtage = Number(useParams().id);

  return (
    <Link className="return__link" to="/etages">
      Retour
    </Link>
  );
}
