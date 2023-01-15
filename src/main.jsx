import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FormDataWrapper } from "./context/formContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FormDataWrapper>
      <App />
    </FormDataWrapper>
  </React.StrictMode>
);
