import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PoiType } from '../../types/PoiType';
import Modal from '../../layout/Modal';
import Error from '../../content/messages/Error';
import Loading from '../../content/messages/Loading';

const API_URL = process.env.REACT_APP_API_URL;

export default function PoiDetail() {
  const { id } = useParams<'id'>();
  const [poi, setPois] = useState<PoiType>();
  const [error, setError] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Fetch POIs
  useEffect(() => {
    axios
      .get(`${API_URL}/pois/${id}/1`)
      .then((res: any) => {
        setIsLoaded(true);
        setPois(res.data);
      })
      .catch((err) => {
        setIsLoaded(true);
        setError(err);
      });
  }, []);

  const displayContent = () => {
    <article className="poi">
      <div className="poi__container">{poi?.title}</div>
    </article>;
  };

  const displayView = () => {
    if (error) {
      return <Error>{error.message}</Error>;
    } else if (!isLoaded || !poi) {
      return <Loading />;
    } else {
      return displayContent();
    }
  };

  return <Modal>{displayView()}</Modal>;
}
