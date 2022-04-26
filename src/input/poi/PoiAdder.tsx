import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import Modal from '../../layout/Modal';

const API_URL = process.env.REACT_APP_API_URL;

// Template
export default function PoiAdder() {
  const location = useLocation();

  return (
    <Link className="button button__add" to="create" state={{ backgroundLocation: location }}>
      <i className="fa-solid fa-plus" />
    </Link>
  );
}
