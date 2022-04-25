import Coupler from "../Coupler";
import InnerWrapper from "../InnerWraper";
import Input from "../Input";
import Label from "../Label";
import Select from "../Select";
import { weekdays } from "../assets/formData";

type dateOptionProps = {
  weekday: string,
  setWeekday: Function,
  hour: string,
  setHour: Function
}

const WeeklyOptionInput = ({ weekday, setWeekday, hour, setHour }: dateOptionProps) => (
  <Label text="Date">
    <InnerWrapper>
      <Select
        value={weekday}
        setValue={setWeekday}
        options={weekdays}
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

export default WeeklyOptionInput;