import "./style.css";

type inputProps = {
  value: string,
  setValue: Function,
  placeholder?: string
  type?: string,
}

const Input = ({ value, setValue, placeholder, type }: inputProps) => (
  <input
    aria-label="input"
    data-testid="input"
    className="Input"
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={e => setValue(e.target.value)}
  />
);

export default Input;