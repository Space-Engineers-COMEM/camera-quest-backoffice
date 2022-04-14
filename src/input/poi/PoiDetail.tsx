import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PoiDetail as PoiDetailType } from '../../types/PoiDetailType';
import Modal from '../../layout/Modal';
import Error from '../../content/messages/Error';
import Loading from '../../content/messages/Loading';

const API_URL = process.env.REACT_APP_API_URL;

export default function PoiDetail() {
  const { id } = useParams<'id'>();
  const [data, setData] = useState<PoiDetailType>();
  const [error, setError] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Fetch POIs
  useEffect(() => {
    axios
      .get(`${API_URL}/pois/${id}/1`)
      .then((res: any) => {
        setIsLoaded(true);
        setData(res.data.content);
      })
      .catch((err) => {
        setIsLoaded(true);
        setError(err);
      });
  }, []);

  const displayContent = () => (
    <article className="poi">
      <div className="poi__container">
        <form className="form" action="">
          <div className="poi__leftColumn">
            <div className="form__row">
              <img src={data?.poi.image_url} alt="" />
            </div>
            <div className="form__row">
              <label htmlFor="resource">Fichier audio</label>
              <input id="resource" type="file" />
            </div>
            <div className="form__row">
              <label htmlFor="subtitle">Sous-titres</label>
              <textarea id="subtitle" value={data?.translations[0].value} />
            </div>
          </div>
          <div className="poi__rightColumn">
            <div className="form__row">
              <label htmlFor="name">Nom de l&#39;objet</label>
              <input id="name" type="text" value={data?.poi.title} />
            </div>
            <div className="form__row">
              <label htmlFor="azure_tag">Tag azure</label>
              <input id="azure_tag" type="text" value={data?.poi.exhibition_number} />
            </div>
            <div className="form__row">
              <label htmlFor="floor">Étage</label>
              <select id="floor" name="">
                <option value="1">Étage 1</option>
                <option value="2">Étage 2</option>
              </select>
            </div>
            <div className="form__row">
              <label htmlFor="tags">Catégories</label>
              {}
            </div>
            <div className="form__row">
              <label htmlFor="location">Lieu</label>
              <input id="location" type="text" value={data?.poi.location} />
            </div>
            <div className="form__row">
              <label htmlFor="date">Date</label>
              <input id="date" type="date" value={data?.poi.periode} />
            </div>
            <div className="form__row">
              <label htmlFor="manufacturer">Constructeur</label>
              <input id="manufacturer" type="text" value={data?.poi.manufacturer} />
            </div>
            <div className="form__row">
              <label htmlFor="description">Texte</label>
              <textarea id="description" value={data?.translations[1].value} />
            </div>
          </div>
        </form>
      </div>
    </article>
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

  return <Modal title={data?.poi.title || ''}>{displayView()}</Modal>;
}
