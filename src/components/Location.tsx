import React from "react";
import location from "../assets/footer/location.svg";
import { LOCATION } from "../utils/constants";

function Location() {
  return (
    <>
      {LOCATION.map((company, idx) => {
        return (
          <div key={idx}>
            <h2 className="font-semibold text-lightGreen uppercase">
              {company.country}
            </h2>
            <div className="flex">
              <img src={location} alt="White Location Icon" />
              <p className="text-white text-sm font-light px-2">
                {company.address}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Location;
