import "./style.css";

import { useState } from "react";
import Input from "../Input";

const Form = () => {
  return (
    <form className="Form">
      <fieldset className="FormFieldset">
        <Input value={""} setValue={() => { }} placeholder="Shareablee Report" labeled labelText="Report name" />
        <Input value={""} setValue={() => { }} type="email" placeholder="client@company.com" labeled labelText="E-mail to" />
      </fieldset>
    </form>
  )
};

export default Form;