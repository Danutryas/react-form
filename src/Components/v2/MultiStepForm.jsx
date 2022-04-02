import React, { useState } from "react";
import InputForm from "./InputForm";
import ProgressStep from "./ProgressStep";
import "./style.css";

function MultiStepForm() {
  const [currPage, setCurrPage] = useState(1);
  const pages = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  function increment() {
    if (currPage < 4 && currPage > 0) {
      setCurrPage((prev) => prev + 1);
    }
  }
  function decrement() {
    if (currPage < 5 && currPage > 1) {
      setCurrPage((prev) => prev - 1);
    }
  }
  function submitHandler() {
    console.log("submitted");
  }
  return (
    <div className="form">
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
        <InputForm currPage={currPage} />
        <div className="button-handler">
          <button onClick={decrement}hidden={currPage === 1} >
            BACK
          </button>
          <button
            onClick={increment}
            hidden={currPage === 4}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}

export default MultiStepForm;
