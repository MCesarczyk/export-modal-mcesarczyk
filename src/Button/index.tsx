import { MouseEventHandler } from "react";
import "./Button.css";

type buttonProps = {
  title: string,
  onClick: MouseEventHandler
}

const Button = ({ title, onClick }: buttonProps) => (
  <button className="Button" onClick={onClick}>
    {title}
  </button>
);

export default Button;