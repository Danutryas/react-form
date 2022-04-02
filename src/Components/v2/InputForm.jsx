import React from "react";
import BudgetPage from "./BudgetPage";
import CompletePage from "./CompletePage";
import ContactPage from "./ContactPage";
import ServicesPage from "./ServicesPage";

function InputForm({ currPage }) {
  if (currPage === 1) {
    return <ContactPage />
  } else if (currPage === 2) {
    return <ServicesPage />
  } else if (currPage === 3) {
    return <BudgetPage />
  } else {
    return <CompletePage />
  }
}

export default InputForm;
