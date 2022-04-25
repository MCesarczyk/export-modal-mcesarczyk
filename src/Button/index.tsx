import { MouseEventHandler } from "react";
import "./style.css";

type buttonProps = {
  type?: "button" | "submit" | "reset" | undefined,
  role?: string,
  title: string,
  onClick: MouseEventHandler
}

const Button = ({ type, role, title, onClick }: buttonProps) => (
  <button type={type} className={`Button ${role === "primary" ? "Button--primary" : ""}`} onClick={onClick}>
    {title}
  </button>
);

export default Button;