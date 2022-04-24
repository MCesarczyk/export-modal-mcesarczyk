import "./style.css";
import Input from "../Input";
import Label from "../Label";

const Form = () => {
  return (
    <form className="Form">
      <fieldset className="FormFieldset">
        <Label text="Report name">
          <Input value={""} setValue={() => { }} placeholder="Shareablee Report" />
        </Label>
        <Label text="E-mail to" >
          <Input value={""} setValue={() => { }} placeholder="client@company.com" />
        </Label>
      </fieldset>
    </form>
  )
};

export default Form;