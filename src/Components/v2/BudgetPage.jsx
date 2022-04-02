import React from "react";

function BudgetPage() {
  const budgetList = [
    { id: 1, val: "$5.000 - $10.000" },
    { id: 2, val: "$10.000 - $20.000" },
    { id: 3, val: "$20.000 - $50.000" },
    { id: 4, val: "$50.000 +" },
  ];
  return (
    <div>
      <h3 className="card-title">What's your peoject budget?</h3>
      <p className="info">
        Please select the project budget range you have in mind
      </p>
      <div className="card-form">
        {budgetList.map(budget => {
          return (
            <div className="budget">
              <input type="radio" name="budget"/>
              <label>{budget.val}</label>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default BudgetPage;
