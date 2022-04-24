type radioProps = {
  value: string,
  setOption: Function,
  option:string,
  checked: boolean,
  label: string
}

const Radio = ({ option, setOption, value, label }: radioProps) => (
  <div>
    <input
      aria-label="radio"
      data-testid="radio"
      className="radio"
      id="radio"
      name="radio"
      type="radio"
      value={value}
      checked={option === value}
      onChange={e => setOption(e.target.value)}
    />
    <label htmlFor="radio">{label}</label>
  </div>
);

export default Radio;