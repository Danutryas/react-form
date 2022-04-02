import React, { useState } from "react";

function BudgetPage({ setBudget }) {
  const [checkedId,setCheckedId] = useState(0)
  const [budgetId,setBudgetId] = useState(0)
  const budgetList = [
    { id: 1, val: "$5.000 - $10.000" },
    { id: 2, val: "$10.000 - $20.000" },
    { id: 3, val: "$20.000 - $50.000" },
    { id: 4, val: "$50.000 +" },
  ];
  const budgetChoose = (budgetVal,id) => {
    setBudget(budgetVal);
    setCheckedId(id)
  };
  const divClick = (id,val) => {
    setCheckedId(id)
    setBudgetId(id)
    setBudget(val);
  }

  return (
    <div className="budget-step">
      <div className="form-header">
        <h3 className="card-title">What's your peoject budget?</h3>
        <p className="info">
          Please select the project budget range you have in mind
        </p>
      </div>
      
      <div className="form">
        {budgetList.map((budget) => {
          return (
            <div
              className={`budget ${checkedId === budget.id ? "checked" : ""}`}
              key={budget.id}
              onClick={() => divClick(budget.id,budget.val)}
            >
              <input
                type="radio"
                name="budget"
                onChange={() => budgetChoose( budget.val, budget.id)}
                checked={budget.id === budgetId ? true : false}
              />
              <label>{budget.val}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BudgetPage;
