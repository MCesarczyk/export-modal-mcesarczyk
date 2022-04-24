import Button from "../../Button";
import "./style.css";

type modalProps = {
  visible: boolean,
  title: string
}

const Modal = ({ visible, title }: modalProps) => (
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
    <div
      aria-label="modal footer"
      className="ModalFooter"
    >
      <Button
        aria-label="cancel button"
        type=""
        title="Cancel"
        onClick={() => { }}
      />
      <Button
        aria-label="submit button"
        type="primary"
        title="OK"
        onClick={() => { }}
      />
    </div>
  </div>
);

export default Modal;