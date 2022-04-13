import React from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';

type ModalProps = {
  children: any;
};

export default function Modal(props: ModalProps) {
  const navigator = useNavigate();
  // const domNode = document.createElement('dialog');
  const domContainer = document.getElementById('modal_root')!;
  // Note: the ! sign say to Typescript that this variable is never null

  const closeButton = () => {
    navigator(-1);
  };

  const content = () => (
    <dialog open>
      <button type="button" onClick={closeButton}>
        Close
      </button>
      <div>{props.children}</div>
    </dialog>
  );

  return ReactDOM.createPortal(content(), domContainer);
}
