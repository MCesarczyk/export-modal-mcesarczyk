import "./style.css";

interface Option {
  id: number,
  label: string
}

type inputProps = {
  value: string,
  setValue: Function,
  options: Option[]
}

const Select = ({ value, setValue, options }: inputProps) => (
  <select
    aria-label="select"
    data-testid="select"
    className="Select"
    value={value}
    onChange={e => setValue(e.target.value)}
  >
    {options.map(option => {
      const { id, label } = option;
      return (
        <option key={id} value={label}>{label}</option>
      )
    })}
  </select>
);

export default Select;