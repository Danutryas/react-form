import React from "react";
import imageSrc from "../../images/complete-element.png";

function CompletePage() {
  return (
    <div>
      <img src={imageSrc} alt="complete" />
      <h4>Submit your quote request</h4>
      <p>
        Please review all the information you previously typed in the past
        steps, and if all is okay, submit your message to receive a project
        quote in 24 - 48 hours.
      </p>
      <button>Submit</button>
    </div>
  );
}

export default CompletePage;
