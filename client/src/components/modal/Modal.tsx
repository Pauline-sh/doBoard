import React from 'react';
import ReactDOM from 'react-dom';
import ModalProps from 'src/utils/ModalProps';

import './style.css';

function Modal({ isShowing, hide, content }: ModalProps): any {
  if (!isShowing) {
    return null;
  }

  return ReactDOM.createPortal(
    <React.Fragment>
      <div className="modal-overlay" />
      <div
        className="modal-wrapper"
        aria-modal
        aria-hidden
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal">
          {content}
        </div>
      </div>
    </React.Fragment>,
    document.body
  )
}

export default Modal;
