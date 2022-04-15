import React, { SetStateAction, useEffect, useState } from 'react';
import { FormInputType } from '../../types/FormInputType';

type AudioFileType = {
  url: string;
};

export default function AudioFile(props: AudioFileType & FormInputType) {
  const [selectedFile, setSelectedFile] = useState();

  useEffect(() => {
    if (!selectedFile) return;
    const objectUrl: SetStateAction<any> = URL.createObjectURL(selectedFile);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (event: any) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }
    setSelectedFile(event.target.files[0]);
  };

  const displayView = () => (
    <div className="form__row">
      <label htmlFor={props.id}>{props.label}</label>
      <input id={props.id} type="file" accept="audio/*" onChange={onSelectFile} />
    </div>
  );

  return displayView();
}
