import "./style.css";

type radioProps = {
  option:any,
  setOption: Function,
  value: string,
  name: string,
  label: string
}

const Radio = ({ option, setOption, value, name, label }: radioProps) => (
  <div className="RadioWrapper">
    <input
      aria-label="radio"
      data-testid="radio"
      className="radio"
      id="radio"
      name={name}
      type="radio"
      value={value}
      checked={option === value}
      onChange={e => setOption(e.target.value)}
    />
    <label className="RadioLabel" htmlFor="radio">{label}</label>
  </div>
);

export default Radio;