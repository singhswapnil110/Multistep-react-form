import { useFormData } from "../../context/formContext";

export const Page4 = ({ isFinalPage }) => {
  const formData = useFormData()[0];
  const { planType, amount, phone, address_1 } = formData;
  return (
    <div>
      <h2>{isFinalPage ? "Congratulations" : "Review and confirm payment"}</h2>
      <section className="page-section">
        <div className="form-element">
          <span>Plan Selected</span>
          <b>{planType.planName}</b>
        </div>
        <div className="form-element">
          <span>Plan Type</span>
          <b>{planType.planType}</b>
        </div>
        <div className="form-element">
          <span>Deductible Amount</span>
          <b>{amount}</b>
        </div>
        <div className="form-element">
          <span>Mobile Number</span>
          <b>{phone}</b>
        </div>
        <div className="form-element">
          <span>Address</span>
          <b>{address_1}</b>
        </div>
      </section>
    </div>
  );
};
