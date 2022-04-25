import { formats, schedules } from "../../assets/formData";
import Form from "../../Form";
import "./style.css";

type modalProps = {
  visible: boolean,
  onClose: () => void,
  title: string
}

const Modal = ({ visible, onClose, title }: modalProps) => (
  <div
    className={`ModalBody ${!visible ? "ModalBody--hidden" : ""}`}
    aria-label="modal body"
    data-testid="modal-body"
  >
    <div>
      <h1
        aria-label="modal header"
        className="ModalTitle"
      >
        {title}
      </h1>
    </div>
    <Form formats={formats} schedules={schedules} onClose={onClose} />
  </div>
);

export default Modal;