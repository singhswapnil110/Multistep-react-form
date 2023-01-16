import { useState, useEffect } from "react";

export const Page3 = ({ setDisableSubmit }) => {
  const [consent, setConsent] = useState({
    condition1: false,
    condition2: false,
    condition3: false,
    condition4: false,
  });

  useEffect(() => {
    Object.values(consent).includes(false)
      ? setDisableSubmit(true)
      : setDisableSubmit(false);
  }, [consent]);

  const updateConsent = (e) => {
    setConsent({ ...consent, [e.target.id]: e.target.checked });
  };

  //   let disableSubmitButton = Object.values(consent).includes(false)
  //     ? setDisableSubmit(true)
  //     : setDisableSubmit(false);

  console.log("Re-Render");
  return (
    <div className="form-page">
      <h2>Declaration</h2>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "100%",
        }}
      >
        <div className="checkbox-element">
          <input
            type="checkbox"
            onChange={updateConsent}
            value={consent.condition1}
            id="condition1"
          />
          <label>
            I hereby declare that none of the proposed members are habitual
            consumers of alcohol, tobacco, gutka or any recreational drugs.
          </label>
        </div>
        <div className="checkbox-element">
          <input type="checkbox" onChange={updateConsent} id="condition2" />
          <label>
            I hereby declare that all proposed members are in good health and
            entirely free from any mental pf physical impairements or
            deformities, disease/condition.
          </label>
        </div>
        <div className="checkbox-element">
          <input type="checkbox" onChange={updateConsent} id="condition3" />
          <label>
            I have understood that there is 30 days waiting period for all
            diseases and 2 years on named ailments. (list of named ailements)
          </label>
        </div>

        <div className="checkbox-element">
          <input type="checkbox" onChange={updateConsent} id="condition4" />
          <label>
            I understand that this policy doesn't cover Pre-existing diseases.{" "}
          </label>
        </div>
      </section>
    </div>
  );
};
