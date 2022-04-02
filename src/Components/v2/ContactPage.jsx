import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiEnvelope } from "react-icons/bi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { IconContext } from "react-icons";

function ContactPage() {
  return (
    <>
      <IconContext.Provider value={{ color: "#A0A3BD", size: "25px" }}>
        <div>
          <h3 className="card-title">Contact details</h3>
          <p className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </div>
        <div className="contact-info">
          <div className="info-name">
            <h5 className="info-title">Name</h5>
            <input type="text" placeholder="John Carter" />
            <AiOutlineUser />
          </div>
          <div className="info-mail">
            <h5 className="info-title">Email</h5>
            <input type="email" placeholder="Email address" />
            <BiEnvelope />
          </div>
        </div>
        <div className="more-info">
          <h5 className="info-title">Phone Number</h5>
          <div className="info-number">
            <input type="tel" placeholder="(123) 456 - 7890" />
            <MdOutlinePhoneAndroid />
          </div>
          <div className="company-info">
            <h5 className="info-title">Company</h5>
            <input type="text" placeholder="Company name" />
            <HiOutlineOfficeBuilding />
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default ContactPage;
