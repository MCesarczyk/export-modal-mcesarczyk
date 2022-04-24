import InnerWrapper from "../InnerWraper";
import Input from "../Input";
import Label from "../Label";

type dateOptionProps = {
  hour: string,
  setHour: Function
}

const DailyOptionInput = ({ hour, setHour }: dateOptionProps) => (
  <Label text="Everyday at">
    <InnerWrapper>
      <Input
        value={hour}
        setValue={setHour}
        type="time"
      />
    </InnerWrapper>
  </Label>
);

export default DailyOptionInput;