import React, { useEffect, useState } from "react";
import InputForm from "./InputForm";
import ProgressStep from "./ProgressStep";
import "./form.css";

function MultiStepForm() {
  // state
  const [currPage, setCurrPage] = useState(1);
  const pages = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  const [account, setAccount] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");

  // function
  function increment() {
    // page increment
    if (currPage < 4 && currPage > 0) {
      setCurrPage((prev) => prev + 1);
    }
  }
  function decrement() {
    // page decrement
    if (currPage < 5 && currPage > 1) {
      setCurrPage((prev) => prev - 1);
    }
  }
  function submitHandler() {
    // submit button clicked
    setAccount([
      ...account,
      {
        name: name,
        email: email,
        phone: phone,
        company: company,
        service: service,
        budget: budget,
      },
    ]);
    setName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setService("");
    setBudget("");
  }
  const validation = () => {
    switch (currPage) {
      case 1:
        if (name === "" || email === "" || phone === "" || company === "") {
          alert("Fill the required form");
        } else {
          increment();
        }
        break;
      case 2:
        if (service === "") {
          alert("Fill the required form");
        } else {
          increment();
        }
        break;

      case 3:
        if (budget === "") {
          alert("Fill the required form");
        } else {
          increment();
        }
        break;
      default:
        alert("error");
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setCurrPage(1);
    }, 10000);
  }, [account]);
  return (
    <div className="container">
      <h1 className="title">Multi Step Form</h1>
      <div className="form-card">
        <div className="progress-bar">
          {pages.map((page) => (
            <ProgressStep
              key={page.id}
              i={page.id}
              currPage={currPage}
              setCurrPage={setCurrPage}
            />
          ))}
        </div>
        {/* {console.log(account)} */}

        <InputForm
          currPage={currPage}
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
          service={service}
          setService={setService}
          budget={budget}
          setBudget={setBudget}
          submitHandler={submitHandler}
        />
        <div className="button-handler">
          <button
            className="prev-button"
            onClick={decrement}
            hidden={currPage === 1}
          >
            Previous step
          </button>
          <button
            className="next-button"
            onClick={validation}
            hidden={currPage === 4}
          >
            Next step
          </button>
        </div>
      </div>
    </div>
  );
}

export default MultiStepForm;
