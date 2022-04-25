import { useState } from "react";
import Button from "../Button";
import Modal from "./Modal";

const ModalWrapper = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const onModalOpen = () => setModalOpen(true);
  const onModalClose = () => setModalOpen(false);


  return (
    <>
      <Button
        aria-label="modal opening button"
        role="primary"
        title={"Open modal"}
        onClick={onModalOpen}
      />
      <Modal
        visible={modalOpen}
        onClose={onModalClose}
        title={"Export report"}
      />
    </>
  );
};

export default ModalWrapper;