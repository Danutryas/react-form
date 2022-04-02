import React from "react";

function ProgressStep({ i, currPage, setCurrPage }) {
  function changeStatus() {
    setCurrPage(i);
  }
  return (
    <div
      className={`progress-step ${currPage >= i ? "selected" : ""}`}
      onClick={changeStatus}
    >
      <div className={`circle `}>{i}</div>
    </div>
  );
}

export default ProgressStep;
