import { useEffect } from "react";
import Modal from "react-modal";

Modal.setAppElement("#modal");

interface MainModalProps {
  isOpen: boolean;
  close: () => void;
}
export default function MainModal({ isOpen, close }: MainModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
      return;
    }
    document.body.classList.remove("modal-open");
  }, [isOpen]);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={close}
      preventScroll
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      shouldFocusAfterRender
      style={{
        content: { display: "flex" },
        overlay: {
          zIndex: 100,
          backgroundColor: "#ffffff77",
        },
      }}
    ></Modal>
  );
}
