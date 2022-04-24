import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PoiType } from '../../types/PoiType';
import { TagType } from '../../types/TagType';
import { ResourceType } from '../../types/ResourceType';
import { TranslationType } from '../../types/TranslationType';

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
import Checkbox from '../form/Checkbox';
import Submit from '../form/Submit';

const API_URL = process.env.REACT_APP_API_URL;

export default function PoiDetail() {
  const { id } = useParams<'id'>();

  const [poi, setPoi] = useState<PoiType>();
  const [tags, setTags] = useState<Array<TagType>>();
  const [resources, setResources] = useState<ResourceType>();
  const [translations, setTranslations] = useState<TranslationType>();
  // const [lang, setLang] = useState<number>();

  const [error, setError] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Fetch POIs
  useEffect(() => {
    axios
      .get(`${API_URL}/pois/${id}/1`)
      .then((res: any) => {
        setIsLoaded(true);
        setPoi(res.data.content.poi);
        setTags(res.data.content.tags);
        setResources(res.data.content.resources);
        setTranslations(res.data.content.translations);
      })
      .catch((err) => {
        setIsLoaded(true);
        setError(err);
      });
  }, []);

  /**
   * Get tags and format them for the <Tags> component
   * @param {Array<TagType> | undefined} newTags - Array<TagType> | undefined
   * @returns The tags, as an array of strings
   */
  const getTags = (newTags: Array<TagType> | undefined) => {
    const formattedTags: any[] = [];
    newTags?.forEach((tag: { name: any }) => {
      formattedTags.push(tag.name);
    });
    return formattedTags;
  };

  /* Template */
  const displayContent = () => (
    <article className="poi">
      <div className="poi__container">
        <Form path="pois" data={[{ data: { ...poi }, path: 'pois' }]}>
          <div className="poi__leftColumn">
            <ImageFile url={poi?.image_url} />
            <AudioFile label="Fichier audio" id="audio" />

            <InputTextarea label="Sous-titres" id="subtitle" value="" />
          </div>
          <div className="poi__rightColumn">
            <InputText
              label="Nom de l'objet"
              id="name"
              value={poi?.title}
              onChange={(newVal: string) => setPoi({ ...poi!, title: newVal })}
            />
            <InputText
              label="Tag azure"
              id="azure_tag"
              value={poi?.exhibition_number}
              onChange={(newVal: number) => setPoi({ ...poi!, exhibition_number: newVal })}
            />
            <Select
              label="Étages"
              id="floor"
              selected={poi?.area}
              options={['Bleu', 'Jaune', 'Vert']}
            />
            <Tags label="Catégories" id="tags" tags={getTags(tags)} />
            <InputText
              label="Lieu"
              id="location"
              value={poi?.location}
              onChange={(newVal: string) => setPoi({ ...poi!, location: newVal })}
            />
            <InputText
              label="Date"
              id="date"
              value={poi?.periode}
              onChange={(newVal: string) => setPoi({ ...poi!, periode: newVal })}
            />
            <InputText
              label="Constructeur"
              id="manufacturer"
              value={poi?.manufacturer}
              onChange={(newVal: string) => setPoi({ ...poi!, manufacturer: newVal })}
            />
            <InputTextarea label="Texte" id="description" value="" />
          </div>
          <Checkbox
            id="archive"
            label="Archiver"
            value={poi?.archived}
            onChange={(newVal: boolean) => setPoi({ ...poi!, archived: newVal })}
          />
          <Submit title="Sauvegarder" />
        </Form>
      </div>
    </article>
  );

  /* Template */
  const displayView = () => {
    if (error) {
      return <Error>{error.message}</Error>;
    } else if (!isLoaded) {
      return <Loading />;
    } else {
      return displayContent();
    }
  };

  return <Modal title={poi?.title || '(Objet sans nom)'}>{displayView()}</Modal>;
}
