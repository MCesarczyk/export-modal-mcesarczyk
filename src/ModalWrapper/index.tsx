import { useState } from "react";
import Button from "../Button";
import Modal from "./Modal";

const ModalWrapper = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);

  return (
    <>
      <Button title={"Open modal"} onClick={openModal} />
      <Modal visible={modalOpen} title={"Export report"} />
    </>
  );
};

export default ModalWrapper;