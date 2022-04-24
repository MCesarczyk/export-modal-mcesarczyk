type inputProps = {
  value: string,
  setValue: Function
}

const Input = ({ value, setValue }: inputProps) => (
  <input
    aria-label="input"
    data-testid="input"
    className="Input"
    value={value}
    onChange={e => setValue(e.target.value)}
  />
);

export default Input;