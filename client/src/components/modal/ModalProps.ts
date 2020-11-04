import React from 'react';

interface ModalPropsInternal {
  isShowing: boolean;
  hide: () => void;
}

type ModalProps = React.PropsWithChildren<ModalPropsInternal>;

export default ModalProps;
