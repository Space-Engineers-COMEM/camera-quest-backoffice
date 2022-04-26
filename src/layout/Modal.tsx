import React from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import '../css/objects/modal.scss';

type ModalProps = {
  children: any;
  title: string;
  description?: string;
};

export default function Modal(props: ModalProps) {
  const navigator = useNavigate();
  const domContainer = document.getElementById('modal_root')!;

  const closeButton = () => {
    navigator(-1);
  };

  const content = () => (
    <dialog className="modal" open>
      <div className="modal__container">
        <header className="modal__header">
          <hgroup>
            <h1>{props.title}</h1>
            {props.description && <div>{props.description}</div>}
          </hgroup>
          <button type="button" className="button button__close" onClick={closeButton}>
            <i className="fa-solid fa-xmark" />
          </button>
        </header>

        <main className="modal__content">{props.children}</main>
      </div>
    </dialog>
  );

  return ReactDOM.createPortal(content(), domContainer);
}
