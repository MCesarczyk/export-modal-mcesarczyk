import { MouseEventHandler } from "react";
import "./style.css";

type buttonProps = {
  type: string,
  title: string,
  onClick: MouseEventHandler
}

const Button = ({ type, title, onClick }: buttonProps) => (
  <button className={`Button ${type === "primary" ? "Button--primary" : ""}`} onClick={onClick}>
    {title}
  </button>
);

export default Button;