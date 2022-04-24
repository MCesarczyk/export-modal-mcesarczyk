import "./style.css";
import Input from "../Input";
import Label from "../Label";
import Radio from "../Radio";
import React from "react";

interface Item {
  id: number,
  label: string
}

interface Items {
  formats: Item[]
  schedules: Item[]
}

const Form: React.FC<Items> = ({ formats, schedules }: Items) => {
  return (
    <form className="Form">
      <fieldset className="FormFieldset">
        <Label text="Report name">
          <Input
            value={""}
            setValue={() => { }}
            placeholder="Shareablee Report"
          />
        </Label>
        <Label text="Format">
          {formats.map((format: Item) => {
            const { id, label } = format;
            return (
              <React.Fragment key={id}>
                <Radio
                  value={""}
                  option={id}
                  setOption={() => { }}
                  name="format"
                  label={label}
                />
              </React.Fragment>
            )
          })}
        </Label>
        <Label text="E-mail to" >
          <Input
            value={""}
            setValue={() => { }}
            placeholder="client@company.com"
          />
        </Label>
        <Label text="Schedule">
          {schedules.map((schedule: Item) => {
            const { id, label } = schedule;
            return (
              <React.Fragment key={id}>
                <Radio
                  value={""}
                  option={id}
                  setOption={() => { }}
                  name="format"
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