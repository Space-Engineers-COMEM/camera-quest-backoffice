import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

type PoiTagsProps = {
  poiId: number;
  langId: number;
};

export default function PoiTags(props: PoiTagsProps) {
  const [tags, setTags] = useState<any[]>([]);
  const [error, setError] = useState<any>(null);

  // Fetch POIs' tags
  useEffect(() => {
    axios
      .get(`${API_URL}/pois/${props.poiId}/${props.langId}`)
      .then((res: any) => {
        setTags(Array.from(res.data.content.tags));
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return (
    <div className="poiTags">
      {tags.map((tag) => (
        <span className="tag" key={tag.id}>
          {tag.name}
        </span>
      ))}
    </div>
  );
}
