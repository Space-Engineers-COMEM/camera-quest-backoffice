/* eslint-disable no-else-return */
import React from 'react';
import PoisList from './input/poi/PoiList';
import PoisFilter from './input/poi/PoiFilter';

/**
 * Renders POIs components
 * @returns A div with two components inside of it.
 */
export default function Pois() {
  return (
    <div>
      <PoisFilter />
      <PoisList />
    </div>
  );
}
