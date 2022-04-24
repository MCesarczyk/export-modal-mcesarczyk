import React, { useState } from "react";
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
  const [name, setName] = useState("");
  const [formatName, setFormatName] = useState("Excel");
  const [email, setEmail] = useState("");
  const [scheduleName, setScheduleName] = useState("No Repeat");

  const formData = {
    name: name,
    email: email,
    format: formatName,
    schedule: scheduleName
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
      </fieldset>
    </form>
  )
};

export default Form;