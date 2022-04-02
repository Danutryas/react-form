import DynamicForm from "./v1/DynamicForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import HeaderForm from "./header/Header";
import MultiStepForm from "./v2/MultiStepForm";
import './FormBuilder.css'

function Form() {
  return (
    <div >
      <BrowserRouter>
        <HeaderForm />
        <div className="content">
          <Routes>
            <Route path="/v1" exact element={<DynamicForm />} />
            <Route path="/v2" exact element={<MultiStepForm />} />
            <Route path="/v3" exact element={""} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Form;

export { DynamicForm };
