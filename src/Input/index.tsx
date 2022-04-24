type inputProps = {
  value: string,
  setValue: Function,
  placeholder?: string,
  type?: string,
  labeled? : boolean,
  labelText?: string
}

const Input = ({ value, setValue, placeholder, type, labeled, labelText }: inputProps) => (
  <div>
    {labeled && <label>{labelText}</label> }
    <input
      aria-label="input"
      data-testid="input"
      className="Input"
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={e => setValue(e.target.value)}
    />
  </div>
);

export default Input;