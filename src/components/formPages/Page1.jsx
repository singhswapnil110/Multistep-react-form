import React, { useEffect, useState } from "react";
import { useFormData } from "../../context/formContext";
import { optionsData } from "../../data/constants";
import { Form } from "../Form";

export const Page1 = ({ setDisableSubmit }) => {
  const [formData, setFormData] = useFormData();
  const { planType } = formData;
  const [expanded, setExpanded] = useState(false);

  const optionsDataArray = optionsData.map((option, index) => (
    <div
      className="plan-select-option"
      onClick={() => setFormData({ ...formData, planType: optionsData[index] })}
    >
      <div className="plan-select-option-header">
        <b>{option.planName}</b> ({option.planType})
      </div>
      <div className="plan-select-option-body">
        <div className="plan-select-option-body-data">
          <img src={option.imgSrc} />
          <span>{option.planMembers}</span>
        </div>
        <span>₹{option.premium}</span>
      </div>
    </div>
  ));
  return (
    <div>
      <header>
        <h2>Choose your plan</h2>
        <p>
          Hello Anisha,
          <br />
          Increase yours and your family's health insurance cover by{" "}
          <b>₹20 lakhs</b> with Super top-up!
        </p>
      </header>
      <section className="page-section">
        <h4>Plan details</h4>
        <div>
          <label>
            Your plan type
            <div
              className="plan-select"
              expanded={expanded.toString()}
              onClick={() => setExpanded(!expanded)}
            >
              {planType ? (
                <div className="plan-select-value">
                  <b>{planType.planName}</b> ({planType.planType})
                </div>
              ) : (
                <div className="plan-select-value">Select your Plan</div>
              )}
              <div className="plan-select-body">{optionsDataArray}</div>
            </div>
          </label>
        </div>
      </section>
      <section className="page-section">
        <div className="section-header">Basic details (required)</div>
        <Form setDisableSubmit={setDisableSubmit} />
      </section>
    </div>
  );
};
