import Modal from "react-modal";

Modal.setAppElement("#modal");

interface MainModalProps {
  isOpen: boolean;
  close: () => void;
}
export default function MainModal({ isOpen, close }: MainModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={close}
      preventScroll
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      shouldFocusAfterRender
    ></Modal>
  );
}
