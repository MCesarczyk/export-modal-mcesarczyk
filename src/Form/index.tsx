import React, { useState } from "react";
import DateOptionInput from "../DateOptionInput";
import DailyOptionInput from "../DailyOptionInput";
import WeeklyOptionInput from "../WeeklyOptionInput";
import Input from "../Input";
import Label from "../Label";
import Radio from "../Radio";
import FormFooter from "../FormFooter";
import { postData } from "../utils/postData";
import { API_URL } from "../assets/variables";
import "./style.css";

interface Item {
  id: number,
  label: string
}

interface Items {
  formats: Item[]
  schedules: Item[]
  onClose: () => void
}

const Form: React.FC<Items> = ({ formats, schedules, onClose }: Items) => {
  const [formatName, setFormatName] = useState("Excel");
  const [scheduleName, setScheduleName] = useState("No Repeat");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [weekday, setWeekday] = useState("");

  const formData = {
    report: {
      name: name,
      email: email,
      format: formatName,
    },
    schedule: {
      type: scheduleName,
      date: date,
      hour: hour,
      weekday: weekday
    }
  };

  const onFormClose = () => {
    onClose();
    setFormatName("Excel");
    setScheduleName("No Repeat");
    setName("");
    setEmail("");
    setDate("");
    setHour("");
    setWeekday("");
  };

  const onFormSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    postData(API_URL, formData)
      .then(_ => {
        alert(`Congrats! Your report has been succesfully exported.`);
      })
      .then(() => onFormClose());
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
        {scheduleName === "Daily" &&
          <DailyOptionInput
            hour={hour}
            setHour={setHour}
          />
        }
        {scheduleName === "Weekly" &&
          <WeeklyOptionInput
            weekday={weekday}
            setWeekday={setWeekday}
            hour={hour}
            setHour={setHour}
          />
        }
      </fieldset>
      <FormFooter
        onClose={onFormClose}
        onFormSubmit={onFormSubmit}
      />
    </form>
  )
};

export default Form;