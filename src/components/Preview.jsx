import { useFormData } from "../context/formContext";
import { REGEX } from "../data/constants";

export const Preview = () => {
  const formData = useFormData()[0];
  const { emailID, phone, pincode, state, address_1, address_2 } = formData;

  return (
    <div className="page-section">
      <div className="preview-header">Form Preview</div>
      <div className="preview-element">
        <span>Personal email address</span>
        {REGEX.EMAIL.test(emailID) ? <span>&#10003;</span> : <span>-</span>}
      </div>
      <div className="preview-element">
        <span>Mobile number</span>
        {REGEX.PHONE.test(phone) ? <span>&#10003;</span> : <span>-</span>}
      </div>
      <div className="preview-element">
        <span>Address line 01</span>
        {REGEX.ADDRESS.test(address_1) ? <span>&#10003;</span> : <span>-</span>}
      </div>
      <div className="preview-element">
        <span>Address line 02</span>
        {address_2 ? <span>&#10003;</span> : <span>-</span>}
      </div>
      <div className="preview-element">
        <span>Pincode</span>
        {REGEX.PINCODE.test(pincode) ? <span>&#10003;</span> : <span>-</span>}
      </div>
      <div className="preview-element">
        <span>State</span>
        {REGEX.STATE.test(state) ? <span>&#10003;</span> : <span>-</span>}
      </div>
    </div>
  );
};
