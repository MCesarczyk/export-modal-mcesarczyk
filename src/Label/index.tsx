import "./style.css";

type labelProps = {
  text?: string,
  children: JSX.Element
}

const Label = ({ text, children }: labelProps) => (
  <div data-testid="label" className="LabelWrapper">
    <label className="Label">{text}</label>
    {children}
  </div>
);

export default Label;