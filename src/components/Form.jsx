import { useFormData } from "../context/formContext";
import { inputData, REGEX } from "../data/constants";
import { FormInput } from "./FormInput";
import { useEffect } from "react";

export const Form = ({ setDisableSubmit }) => {
  const [formData, setFormData] = useFormData();
  const { emailID, phone, address_1, pincode, state, planType } = formData;

  useEffect(() => {
    if (
      REGEX.EMAIL.test(emailID) &&
      REGEX.ADDRESS.test(address_1) &&
      REGEX.PHONE.test(phone) &&
      REGEX.PINCODE.test(pincode) &&
      REGEX.STATE.test(state) &&
      planType !== null
    )
      setDisableSubmit(false);
    else setDisableSubmit(true);

    console.log(
      REGEX.EMAIL.test(emailID),
      REGEX.ADDRESS.test(address_1),
      REGEX.PHONE.test(phone),
      REGEX.PINCODE.test(pincode),
      REGEX.STATE.test(state)
    );
  });

  const updateFormValues = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-element">
      {inputData.map((inputElement) => (
        <FormInput
          {...inputElement}
          key={inputElement.id}
          updateFormValues={updateFormValues}
          value={formData[inputElement.name]}
        />
      ))}
    </div>
  );
};
