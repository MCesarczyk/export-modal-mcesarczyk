import "./style.css";

type inputProps = {
  value: string,
  setValue: Function,
  placeholder?: string
}

const Input = ({ value, setValue, placeholder }: inputProps) => (
  <input
    aria-label="input"
    data-testid="input"
    className="Input"
    value={value}
    placeholder={placeholder}
    onChange={e => setValue(e.target.value)}
  />
);

export default Input;