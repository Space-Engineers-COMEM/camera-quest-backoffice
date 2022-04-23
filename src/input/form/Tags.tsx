import React, { HTMLInputTypeAttribute, useCallback, useEffect, useState } from 'react';
import { FormInputType } from '../../types/FormInputType';

type TagsType = {
  tags: string[] | undefined;
};

export default function Tags(props: TagsType & FormInputType) {
  const [tags, setTags] = useState<string[]>(props.tags || []);
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    setTags(tags);
  }, [tags]);

  /**
   * Add a tag with the name of the input value.
   * Don't add tag if new tag is empty or already exist.
   * @param {string} newTag - string - The new tag to add to the list of tags.
   */
  const addTag = (newTag: string) => {
    if (newTag === '') return;
    if (tags.includes(newTag)) return;
    setTags((oldTags) => [newTag, ...oldTags]);
  };

  /**
   * Remove a tag from the list of tags.
   * @param {string} tag - the tag that was clicked
   */
  const removeTag = (tag: string) => {
    setTags((oldTags) => oldTags.filter((t) => t !== tag));
  };

  /* Handle when user write something in input */
  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    },
    [inputValue]
  );

  /* Handle when the user presses the enter key in input field */
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        event.preventDefault(); // avoid submitting the form
        addTag(event.currentTarget.value);
        setInputValue(''); // clear the input field
      }
    },
    [tags]
  );

  /* Handle when the user presses the button */
  const handleButtonClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const { key } = event.currentTarget.dataset;
      if (!key) return;
      removeTag(key);
    },
    [tags]
  );

  /* Template */
  const displayView = () => (
    <div className="form__row">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type="search"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
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
