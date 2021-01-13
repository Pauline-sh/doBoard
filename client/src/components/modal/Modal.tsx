import './Modal.css';

import { block } from 'bem-cn';
import React from 'react';
import ReactDOM from 'react-dom';
import ModalProps from 'src/components/modal/ModalProps';

const b = block('modal');

function Modal(props: ModalProps): React.ReactPortal | null {
  if (!props.isShowing) {
    return null;
  }

  return ReactDOM.createPortal(
    <React.Fragment>
      <div className={b('overlay')} />
      <div
        className={b('wrapper')}
        aria-modal
        aria-hidden
        tabIndex={-1}
        role='dialog'
      >
        <div className={b()}>{props.children}</div>
      </div>
    </React.Fragment>,
    document.body
  );
}

export default Modal;
