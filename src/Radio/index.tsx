import "./style.css";

type radioProps = {
  setOption: Function,
  checked: boolean,
  value: string,
  name: string,
  label: string
}

const Radio = ({ setOption, checked, value, name, label }: radioProps) => (
  <div className="RadioWrapper">
    <input
      aria-label="radio"
      data-testid="radio"
      className="radio"
      id={name}
      name={name}
      type="radio"
      value={value}
      checked={checked}
      onChange={e => setOption(e.target.value)}
    />
    <label className="RadioLabel" htmlFor={name}>{label}</label>
  </div>
);

export default Radio;