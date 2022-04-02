import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiEnvelope } from "react-icons/bi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { IconContext } from "react-icons";

function ContactPage({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  company,
  setCompany,
}) {
  const inputHandlerName = (e) => {
    setName(e.target.value);
  };
  const inputHandlerEmail = (e) => {
    setEmail(e.target.value);
  };
  const inputHandlerPhone = (e) => {
    setPhone(e.target.value);
  };
  const inputHandlerCompany = (e) => {
    setCompany(e.target.value);
  };
  

  return (
    <div className="contact-step">
      <IconContext.Provider value={{ color: "#A0A3BD", size: "25px" }}>
        <div className="form-header">
          <h3 className="card-title">Contact details</h3>
          <p className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </div>
        <div className="form">
          <div className="info-name">
            <h5 className="info-title">Name</h5>
            <div className="input-field">
              <input
                type="text"
                placeholder="John Carter"
                value={name}
                onChange={inputHandlerName}
                name="name"
                autoComplete="off"
                spellCheck={false}
              />
              <AiOutlineUser />
            </div>
          </div>
          <div className="info-mail">
            <h5 className="info-title">Email</h5>
            <div className="input-field">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={inputHandlerEmail}
                autoComplete="off"
                spellCheck={false}
              />
              <BiEnvelope />
            </div>
          </div>
          <div className="info-number">
            <h5 className="info-title">Phone Number</h5>
            <div className="input-field">
              <input
                type="tel"
                placeholder="(123) 456 - 7890"
                value={phone}
                onChange={inputHandlerPhone}
                autoComplete="off"
                spellCheck={false}
              />
              <MdOutlinePhoneAndroid />
            </div>
          </div>
          <div className="info-company">
            <h5 className="info-title">Company</h5>
            <div className="input-field">
              <input
                type="text"
                placeholder="Company name"
                value={company}
                onChange={inputHandlerCompany}
                autoComplete="off"
                spellCheck={false}
              />
              <HiOutlineOfficeBuilding />
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default ContactPage;
