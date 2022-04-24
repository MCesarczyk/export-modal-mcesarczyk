import "./style.css";

type couplerProps = {
  text: string
}

const Coupler = ({ text }: couplerProps) => (
  <span data-testid="coupler" className="Coupler">{text}</span>
);

export default Coupler;