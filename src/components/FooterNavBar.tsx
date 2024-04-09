import React from "react";
import { NavLink } from "react-router-dom";
import { FOOTER_NAVBAR_TABS } from "../utils/constants";
import Mail from "../assets/footer/mail.svg";

function FooterNavBar() {
  return (
    <>
      {FOOTER_NAVBAR_TABS.map((tab, idx) => {
        return (
          <div key={idx}>
            <h2 className="text-lightGreen font-semibold cursor-pointer">
              <NavLink to={tab.to}>{tab.title}</NavLink>
            </h2>
            <ul className="text-white text-sm font-light">
              <li>{tab.description?.one}</li>
              <li>{tab.description?.two}</li>
            </ul>
          </div>
        );
      })}
      <div>
        <h2 className="text-lightGreen font-semibold cursor-pointer">
          Contact
        </h2>
        <div className="flex">
          <img src={Mail} alt="White Email Icon" />
          <p className="text-white text-sm font-light pl-2 cursor-pointer">
            <NavLink to="mailto:sales@metech.io">sales@metech.io</NavLink>
          </p>
        </div>
      </div>
    </>
  );
}

export default FooterNavBar;
