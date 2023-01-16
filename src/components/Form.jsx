import { useFormData } from "../context/formContext";
import { inputData, REGEX } from "../data/constants";
import { FormInput } from "./FormInput";
import { useEffect, useState } from "react";

export const Form = ({ setDisableSubmit }) => {
  const [formData, setFormData] = useFormData();
  const [disableStateInput, setDisableInput] = useState(true);
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
  });

  useEffect(() => {
    if (REGEX.PINCODE.test(pincode)) fetchPincode(0);
    else {
      setFormData({ ...formData, state: "" });
      setDisableInput(true);
    }
  }, [pincode]);

  const fetchPincode = async (retries) => {
    const pincodeData = await fetch(
      "https://api.postalpincode.in/pincode/" + pincode
    ).then((res) => res.json());
    const { PostOffice } = pincodeData[0];

    if (PostOffice != null)
      setFormData({ ...formData, state: PostOffice[0].State });
    else if (PostOffice == null && retries < 2)
      setTimeout(() => fetchPincode(retries + 1), 500);
    else setDisableInput(false);
  };

  const updateFormValues = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-body">
      {inputData.map((inputElement) => (
        <FormInput
          {...inputElement}
          key={inputElement.id}
          updateFormValues={updateFormValues}
          value={formData[inputElement.name]}
          disabled={inputElement.name == "state" ? disableStateInput : false}
        />
      ))}
    </div>
  );
};
