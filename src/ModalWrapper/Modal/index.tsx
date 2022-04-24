import "./style.css";

type modalProps = {
  visible: boolean,
  title: string
}

const Modal = ({ visible, title }: modalProps) => (
  <div
    className={`ModalBody ${!visible ? "ModalBody--hidden" : ""}`}
    data-testid="modal-body"
  >
    <div>
      <h1 className="ModalTitle">{title}</h1>
    </div>
    <div className="ModalFooter"></div>
  </div>
);

export default Modal;