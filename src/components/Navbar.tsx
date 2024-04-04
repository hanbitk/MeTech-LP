import React from "react";
import { NavLink } from "react-router-dom";
import { NAVBAR_TABS } from "../utils/constants";

function Navbar() {
  return (
    <nav className="w-2/5 flex items-center justify-center font-semibold text-white">
      <ul className="w-full flex justify-between cursor-pointer">
        {NAVBAR_TABS.map((tab, idx) => {
          return (
            <li
              key={idx}
              className="hover:underline underline-offset-8 decoration-lightGreen"
            >
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-lightGreen" : ""
                }
                to={tab.path}
              >
                {tab.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
