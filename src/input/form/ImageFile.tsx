import React, { SetStateAction, useEffect, useState } from 'react';

type ImageType = {
  url: string | undefined;
};

export default function Image(props: ImageType) {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState<string>(props.url || '/img/defaultPoi.jpg');

  useEffect(() => {
    if (!selectedFile) return;

    // Create a blob URL to preview the image
    const objectUrl: SetStateAction<any> = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // Free memory when the component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  /**
   * When a file is uploaded, set it at the state.
   */
  const onSelectFile = (event: any) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }
    setSelectedFile(event.target.files[0]);
  };

  const displayView = () => (
    <div className="form__row">
      {/*
      Message to the integrator: change the inline width of the image and define in the CSS rules !!!
      */}
      <img width="200" src={preview} alt="" />
      <input type="file" accept="image/*" onChange={onSelectFile} />
    </div>
  );

  return displayView();
}
