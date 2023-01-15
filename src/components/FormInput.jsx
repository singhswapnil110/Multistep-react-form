import { useState } from "react";
import { errorValues } from "../data/constants";

export const FormInput = ({ label, updateFormValues, ...inputElement }) => {
  const [isFieldVisited, setFieldVisited] = useState(false);
  return (
    <div className="form-input">
      <label>{label}</label>
      <input
        {...inputElement}
        onChange={(e) => updateFormValues(e)}
        className="form-input-element"
        onBlur={() => setFieldVisited(true)}
        visited={isFieldVisited.toString()}
      />
      <div className="form-input-element-error">
        {errorValues[inputElement.name]}
      </div>
    </div>
  );
};
