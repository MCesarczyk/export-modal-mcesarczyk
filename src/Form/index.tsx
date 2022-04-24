import React, { useState } from "react";
import DateOptionInput from "../DateOptionInput";
import Input from "../Input";
import Label from "../Label";
import Radio from "../Radio";
import "./style.css";

interface Item {
  id: number,
  label: string
}

interface Items {
  formats: Item[]
  schedules: Item[]
}

const Form: React.FC<Items> = ({ formats, schedules }: Items) => {
  const [formatName, setFormatName] = useState("Excel");
  const [scheduleName, setScheduleName] = useState("No Repeat");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");

  const formData = {
    report: {
      name: name,
      email: email,
      format: formatName,
    },
    schedule: {
      type: scheduleName,
      date: date,
      hour: hour
    }
  };

  return (
    <form className="Form">
      <fieldset className="FormFieldset">
        <Label text="Report name">
          <Input
            value={name}
            setValue={setName}
            placeholder="Shareablee Report"
          />
        </Label>
        <Label text="Format">
          {formats.map((format: Item) => {
            const { id, label } = format;
            return (
              <React.Fragment key={id}>
                <Radio
                  value={label}
                  checked={label === formatName}
                  setOption={setFormatName}
                  name={label}
                  label={label}
                />
              </React.Fragment>
            )
          })}
        </Label>
        <Label text="E-mail to" >
          <Input
            value={email}
            setValue={setEmail}
            placeholder="client@company.com"
          />
        </Label>
        <Label text="Schedule">
          {schedules.map((schedule: Item) => {
            const { id, label } = schedule;
            return (
              <React.Fragment key={id}>
                <Radio
                  value={label}
                  checked={label === scheduleName}
                  setOption={setScheduleName}
                  name={label}
                  label={label}
                />
              </React.Fragment>
            )
          })}
        </Label>
        {scheduleName === "Specific Date" &&
          <DateOptionInput
            date={date}
            setDate={setDate}
            hour={hour}
            setHour={setHour}
          />
        }
      </fieldset>
    </form>
  )
};

export default Form;