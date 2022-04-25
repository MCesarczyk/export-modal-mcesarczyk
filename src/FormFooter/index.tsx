import { MouseEventHandler } from "react";
import Button from "../Button";
import "./style.css";

type footerProps = {
  onClose: MouseEventHandler,
  onFormSubmit: MouseEventHandler
}

const FormFooter = ({ onClose, onFormSubmit }: footerProps) => (
  <div
    aria-label="form footer"
    className="FormFooter"
  >
    <Button
      aria-label="cancel button"
      title="Cancel"
      type="button"
      onClick={onClose}
    />
    <Button
      aria-label="submit button"
      role="primary"
      type="submit"
      title="OK"
      onClick={onFormSubmit}
    />
  </div>
);

export default FormFooter;