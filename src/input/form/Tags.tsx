import React, { useCallback, useEffect, useState } from 'react';
import { FormInput } from '../../types/FormInput';

type TagsType = {
  tags: any[];
};

export default function Tags(props: TagsType & FormInput) {
  const [tags, setTags] = useState<string[]>(props.tags);

  /**
   * Don't add tag if new tag is empty or already exist.
   * @param {string} newTag - string - The new tag to add to the list of tags.
   * @returns the new array of tags.
   */
  const addTag = (newTag: string) => {
    if (newTag === '') return;
    if (tags.includes(newTag)) return;
    setTags((oldTags) => [newTag, ...oldTags]);
  };

  const removeTag = (tag: string) => {
    setTags((oldTags) => oldTags.filter((t) => t !== tag));
  };

  /* Handle when the user presses the enter key in input field */
  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        addTag(event.currentTarget.value);
      }
    },
    [tags]
  );

  const handleButtonClick = useCallback(
    (event) => {
      removeTag(event.currentTarget.dataset.key);
    },
    [tags]
  );

  /* Hook that runs after the component is rendered. */
  useEffect(() => {
    setTags(tags);
  }, [tags]);

  /* Template */
  const displayView = () => (
    <div className="form__row">
      <label htmlFor={props.id}>{props.label}</label>
      <input id={props.id} type="search" onKeyDown={handleKeyDown} />
      <ul className="tags">
        {tags.map((tag) => (
          <li key={tag}>
            {tag}
            <button type="button" data-key={tag} onClick={handleButtonClick}>
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

  return displayView();
}
