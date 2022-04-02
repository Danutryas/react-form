import React from "react";
import HeaderBuilder from "./headerBuilder";
import "./header.css";

function HeaderForm() {
  return (
    <div className="form-header">
      <ul>
        <li>
          <HeaderBuilder linkTo={"/v1"} name="V1" />
        </li>
        <li>
          <HeaderBuilder linkTo={"/v2"} name="V2" />
        </li>
        <li>
          <HeaderBuilder linkTo={"/v3"} name="V3" />
        </li>
      </ul>
    </div>
  );
}

export default HeaderForm;
