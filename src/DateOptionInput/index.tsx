import Coupler from "../Coupler";
import InnerWrapper from "../InnerWraper";
import Input from "../Input";
import Label from "../Label";

type dateOptionProps = {
  date: string,
  setDate: Function,
  hour: string,
  setHour: Function
}

const DateOptionInput = ({ date, setDate, hour, setHour }: dateOptionProps) => (
  <Label text="Date">
    <InnerWrapper>
      <Input
        value={date}
        setValue={setDate}
        type="date"
      />
      <Coupler text="at" />
      <Input
        value={hour}
        setValue={setHour}
        type="time"
      />
    </InnerWrapper>
  </Label>
);

export default DateOptionInput;