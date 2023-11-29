import { useEffect, JSX } from "react";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
Modal.setAppElement("#modal");

interface MainModalProps {
  isOpen: boolean;
  close: () => void;
  content: JSX.Element;
}
export default function MainModal({ isOpen, close, content }: MainModalProps) {
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
        content: {
          display: "flex",
          boxSizing: "border-box",
          padding: 20,
          backgroundColor: "#9ca3af",
          border: 0,
        },
        overlay: {
          zIndex: 100,
          backgroundColor: "#ffffff77",
        },
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={close}
            style={{ backgroundColor: "rgba(0,0,0,0)", border: 0 }}
          >
            <IoMdClose style={{ cursor: "pointer" }} size={30} />
          </button>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {content}
        </div>
      </div>
    </Modal>
  );
}
