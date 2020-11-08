import React from 'react';

interface ModalPropsInternal {
  isShowing: boolean;
  handleClick: () => void;
}

type ModalProps = React.PropsWithChildren<ModalPropsInternal>;

export default ModalProps;
