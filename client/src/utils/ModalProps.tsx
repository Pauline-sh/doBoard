export default interface ModalProps {
  isShowing: boolean;
  hide: () => void;
  content: JSX.Element;
}
