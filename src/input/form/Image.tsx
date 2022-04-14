import React, { SetStateAction, useEffect, useState } from 'react';

type ImageType = {
  url: string;
};

export default function Image(props: ImageType) {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState<string>(props.url);

  useEffect(() => {
    if (!selectedFile) return;
    const objectUrl: SetStateAction<any> = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

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
      {/* Message to the integrator: change the inline width of the image and define in the CSS rules !!! */}
      <img width="200" src={preview} alt="" />
      <input type="file" onChange={onSelectFile} />
    </div>
  );

  return displayView();
}
