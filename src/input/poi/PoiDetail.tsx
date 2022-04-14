import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PoiDetail as PoiDetailType } from '../../types/PoiDetailType';
import Modal from '../../layout/Modal';
import Error from '../../content/messages/Error';
import Loading from '../../content/messages/Loading';
// import Form from '../../input/form/Form'; <- not sure to use this
import InputText from '../form/InputText';
import InputTextarea from '../form/InputTextarea';
import Image from '../form/Image';
import Tags from '../form/Tags';

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
  });

  const getTags = (tags: any[]) => {
    const formattedTags: any[] = [];
    tags.forEach((tag: { name: any }) => {
      formattedTags.push(tag.name);
    });
    return formattedTags;
  };

  const displayContent = () => (
    <article className="poi">
      <div className="poi__container">
        <form className="form" action="">
          <div className="poi__leftColumn">
            <Image url={data?.poi.image_url!} />
            <div className="form__row">
              <label htmlFor="resource">Fichier audio</label>
              <input id="resource" type="file" />
            </div>

            <InputTextarea label="Sous-titres" id="subtitle" value={data?.translations[0].value} />
          </div>
          <div className="poi__rightColumn">
            <InputText label="Nom de l'objet" id="name" value={data?.poi.title} />
            <InputText label="Tag azure" id="azure_tag" value={data?.poi.exhibition_number} />
            <div className="form__row">
              <label htmlFor="floor">Étage</label>
              <select id="floor" name="">
                <option value="1">Étage 1</option>
                <option value="2">Étage 2</option>
              </select>
            </div>
            <Tags label="Catégories" id="tags" tags={getTags(data?.tags!) || []} />
            <InputText label="Lieu" id="location" value={data?.poi.location} />
            <InputText label="Date" id="date" value={data?.poi.periode} />
            <InputText label="Constructeur" id="manufacturer" value={data?.poi.manufacturer} />
            <InputTextarea label="Texte" id="description" value={data?.translations[1].value} />
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
