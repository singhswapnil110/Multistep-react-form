import { createContext, useState, useContext } from "react";
import { initialFormData } from "../data/constants";

const formContext = createContext();

export const useFormData = () => useContext(formContext);

export const FormDataWrapper = ({ children }) => {
  const [formData, setFormData] = useState(initialFormData);
  return (
    <formContext.Provider value={[formData, setFormData]}>
      {children}
    </formContext.Provider>
  );
};
