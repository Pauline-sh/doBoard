import './Modal.css';

import React from 'react';
import ReactDOM from 'react-dom';
import ModalProps from 'src/components/modal/ModalProps';

function Modal(props: ModalProps): React.ReactPortal | null {
  if (!props.isShowing) {
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
        <div className="modal">{props.children}</div>
      </div>
    </React.Fragment>,
    document.body
  );
}

export default Modal;
