import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PoiCard from './PoiCard';

const API_URL = process.env.REACT_APP_API_URL;

/**
 * It fetches the data from the API, and then displays it in a list
 * @returns A list of POIs
 */
export default function PoisList() {
  const [pois, setPois] = useState<any[]>([]);
  const [error, setError] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Fetch POIs
  useEffect(() => {
    axios
      .get(`${API_URL}/pois/previews`)
      .then((res: any) => {
        setIsLoaded(true);
        setPois(res.data);
      })
      .catch((err) => {
        setIsLoaded(true);
        setError(err);
      });
  }, []);

  // Display POIs when loaded
  if (error) {
    return <div>{error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {pois.map((poi) => (
          <PoiCard
            key={poi.id}
            id={poi.id}
            title={poi.title}
            imagePath={poi.imagePath}
            area={poi.area}
          />
        ))}
      </ul>
    );
  }
}
