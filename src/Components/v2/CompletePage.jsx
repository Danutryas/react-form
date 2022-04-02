import React from "react";
import imageSrc from "../../images/complete-element.png";

function CompletePage({ submitHandler }) {
  return (
    <div className="submit-step">
      <div className="form-header">
        <img src={imageSrc} alt="complete" className="complete-image"/>
        <h3 className="card-title">Submit your quote request</h3>
        <p className="info">
          Please review all the information you previously typed in the past
          steps, and if all is okay, submit your message to receive a project
          quote in 24 - 48 hours.
        </p>
      </div>
      <button className="submit-button"onClick={submitHandler}>Submit</button>
    </div>
  );
}

export default CompletePage;
