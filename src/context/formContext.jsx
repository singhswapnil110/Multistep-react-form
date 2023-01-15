import { useEffect } from "react";
import { createContext, useState, useContext } from "react";
import { initialFormData } from "../data/constants";

const formContext = createContext();

export const useFormData = () => useContext(formContext);

export const FormDataWrapper = ({ children }) => {
  const [formData, setData] = useState(
    JSON.parse(localStorage.getItem("formData")) || initialFormData
  );

  const setFormData = (data) => {
    setData(data);
    localStorage.setItem("formData", JSON.stringify(data));
  };

  return (
    <formContext.Provider value={[formData, setFormData]}>
      {children}
    </formContext.Provider>
  );
};
