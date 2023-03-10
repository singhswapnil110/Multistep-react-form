import { useState } from "react";
import { useFormData } from "../../context/formContext";
import UserIcon from "../../assets/Husband-Filled.png";
import { sliderData } from "../../data/constants";

export const Page2 = ({ setDisableSubmit }) => {
  const [formData, setFormData] = useFormData();
  const [consent, setConsent] = useState(false);
  const { amount, planType } = formData;

  if (consent == true) setDisableSubmit(false);
  else setDisableSubmit(true);

  return (
    <div>
      <header>
        <h2>Select your deductible amount</h2>
        <p>
          Select the deductible amount for the policy (or policies) below.
          <br />{" "}
          <a
            href="https://plumcare.freshdesk.com/support/solutions/articles/82000886968-what-is-deductible-"
            target="_blank"
            rel="noopener noreferrer"
          >
            (What is a deductible?)
          </a>
        </p>
      </header>
      <section className="page-section">
        <div className="page-section-header">
          <div>
            {planType?.planMembers} ({planType?.planType})
          </div>
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              margin: "10px 0",
            }}
          >
            <img src={UserIcon} />
            <span>{formData.name}</span>
          </div>
        </div>
        <div>
          <p>Sum insured of ₹20,00,000 with a deductible of ₹{amount}</p>
          <div className="range-slider">
            <input
              type="range"
              min={100000}
              max={500000}
              step={100000}
              style={{
                background: `linear-gradient(to right,#D44C46 0%,#FFDE9E ${
                  (amount / 500000) * 100
                }%)`,
              }}
              value={amount}
              onChange={(e) =>
                setFormData({ ...formData, amount: e.target.value })
              }
            />
            <div className="range-slider-label">
              {sliderData.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="checkbox-element">
        <input type="checkbox" onChange={(e) => setConsent(e.target.checked)} />
        <label>
          I understand that this insurance will not be utilized until ₹{amount}{" "}
          (deductible) is exhausted.
        </label>
      </div>
    </div>
  );
};
