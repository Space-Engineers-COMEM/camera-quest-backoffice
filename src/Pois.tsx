/* eslint-disable no-else-return */
import React from 'react';
import PoisList from './input/poi/PoiList';
import PoisFilter from './input/poi/PoiFilter';
import PoiAdder from './input/poi/PoiAdder';

/**
 * Renders POIs components
 * @returns A div with two components inside of it.
 */
export default function Pois() {
  return (
    <div className="pageContainer poisPageContainer">
      <div>
        <h1>Liste des objets</h1>
      </div>
      <div className="poisContainer">
        <PoisFilter />
        <PoisList />
        <div className="positionner">
          <PoiAdder />
        </div>
      </div>
    </div>
  );
}
