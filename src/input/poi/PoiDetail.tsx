import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PoiDetail as PoiDetailType } from '../../types/PoiDetailType';
import Modal from '../../layout/Modal';
import Error from '../../content/messages/Error';
import Loading from '../../content/messages/Loading';
import Form from '../form/Form';
import InputText from '../form/InputText';
import InputTextarea from '../form/InputTextarea';
import ImageFile from '../form/ImageFile';
import AudioFile from '../form/AudioFile';
import Tags from '../form/Tags';
import Select from '../form/Select';
import Submit from '../form/Submit';
import { TagType } from '../../types/TagType';

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

  /**
   * Get tags and format them for the <Tags> component
   * @param {Array<TagType> | undefined} tags - Array<TagType> | undefined
   * @returns The tags, as an array of strings
   */
  const getTags = (tags: Array<TagType> | undefined) => {
    const formattedTags: any[] = [];
    tags?.forEach((tag: { name: any }) => {
      formattedTags.push(tag.name);
    });
    return formattedTags;
  };

  /* Template */
  const displayContent = () => (
    <article className="poi">
      <div className="poi__container">
        <Form>
          <div className="poi__leftColumn">
            <ImageFile url={data?.poi.image_url} />
            <AudioFile label="Fichier audio" id="audio" url={data?.resources[0].url} />

            <InputTextarea label="Sous-titres" id="subtitle" value={data?.translations[0].value} />
          </div>
          <div className="poi__rightColumn">
            <InputText label="Nom de l'objet" id="name" value={data?.poi.title} />
            <InputText label="Tag azure" id="azure_tag" value={data?.poi.exhibition_number} />
            <Select
              label="Étages"
              id="floor"
              selected={data?.poi.area}
              options={['Bleu', 'Jaune', 'Vert']}
            />
            <Tags label="Catégories" id="tags" tags={getTags(data?.tags)} />
            <InputText label="Lieu" id="location" value={data?.poi.location} />
            <InputText label="Date" id="date" value={data?.poi.periode} />
            <InputText label="Constructeur" id="manufacturer" value={data?.poi.manufacturer} />
            <InputTextarea label="Texte" id="description" value={data?.translations[1].value} />
          </div>
          <Submit title="Sauvegarder" />
        </Form>
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
