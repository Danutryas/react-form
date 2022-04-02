import React from "react";
import BudgetPage from "./BudgetPage";
import CompletePage from "./CompletePage";
import ContactPage from "./ContactPage";
import ServicesPage from "./ServicesPage";

function InputForm({
  currPage,
  account,
  setAccount,
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  company,
  setCompany,
  service,
  setService,
  budget,
  setBudget,
  submitHandler,
}) {
  if (currPage === 1) {
    return (
      <ContactPage
        account={account}
        setAccount={setAccount}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        company={company}
        setCompany={setCompany}
      />
    );
  } else if (currPage === 2) {
    return <ServicesPage service={service} setService={setService} />;
  } else if (currPage === 3) {
    return <BudgetPage budget={budget} setBudget={setBudget} />;
  } else {
    return <CompletePage submitHandler={submitHandler} />;
  }
}

export default InputForm;
