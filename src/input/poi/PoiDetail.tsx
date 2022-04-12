import React from 'react';
import { useParams } from 'react-router-dom';
import PoiTags from '../../content/poi/PoiTags';
import Modal from '../../layout/Modal';

export default function PoiDetail() {
  const { id } = useParams<'id'>();

  return (
    <Modal>
      <article>Titre détail ID {id}</article>
    </Modal>
  );
}
