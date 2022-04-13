import React from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import '../css/objects/modal.scss';

type ModalProps = {
  children: any;
  // title: string;
  // description: string;
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
    <dialog className="modal" open>
      <div className="modal__container">
        <header className="modal__header">
          <hgroup>
            <h1>Titre</h1>
            <div>Description</div>
          </hgroup>
          <button type="button" onClick={closeButton}>
            X
          </button>
        </header>

        <main className="modal__content">{props.children}</main>
      </div>
    </dialog>
  );

  return ReactDOM.createPortal(content(), domContainer);
}
