import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PoiType } from '../../types/PoiType';
import PoiCard from './PoiCard';
import Error from '../../content/messages/Error';
import Loading from '../../content/messages/Loading';

const API_URL = process.env.REACT_APP_API_URL;

/**
 * It fetches the data from the API, and then displays it in a list
 * @returns A list of POIs
 */
export default function PoisList() {
  const [data, setData] = useState<PoiType[]>();
  const [error, setError] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Fetch POIs
  useEffect(() => {
    axios
      .get(`${API_URL}/pois`)
      .then((res: any) => {
        setIsLoaded(true);
        setData(res.data);
      })
      .catch((err) => {
        setIsLoaded(true);
        setError(err);
      });
  }, []);

  const displayContent = () => (
    <ul>
      {data?.map((poi) => (
        <PoiCard
          key={poi.id}
          id={poi.id}
          title={poi.title}
          imageUrl={poi.image_url}
          area={poi.area}
          archived={poi.archived}
        />
      ))}
    </ul>
  );

  const displayView = () => {
    if (error) {
      return <Error>{error.message}</Error>;
    } else if (!isLoaded || !data) {
      return <Loading />;
    } else {
      return displayContent();
    }
  };

  return displayView();
}
