import React from "react";
import { PARTNERS } from "../utils/partners";

function Partners() {
  return (
    <>
      {/* 1st Row */}
      <div className="grid grid-cols-4 gap-12">
        {PARTNERS.slice(0, 4).map((partner, idx) => {
          return (
            <div key={idx} className="w-[200px] h-[100px]">
              <img
                className="w-full h-full object-contain hover:scale-110 hover:transition ease-in-out delay-100 cursor-pointer"
                src={require("../assets/section/partners_research/" +
                  partner.src +
                  ".png")}
                alt={partner.alt}
              />
            </div>
          );
        })}
      </div>
      {/* 2nd Row */}
      <div className="grid grid-cols-3 gap-6">
        {PARTNERS.slice(4, 7).map((partner, idx) => {
          return (
            <div key={idx} className="w-[200px] h-[100px]">
              <img
                className="w-full h-full object-contain hover:scale-110 hover:transition ease-in-out delay-100 cursor-pointer"
                src={require("../assets/section/partners_research/" +
                  partner.src +
                  ".png")}
                alt={partner.alt}
              />
            </div>
          );
        })}
      </div>
      {/* 3rd Row */}
      <div className="grid grid-cols-3 gap-20">
        {PARTNERS.slice(7, 10).map((partner, idx) => {
          return (
            <div key={idx} className="w-[200px] h-[100px]">
              <img
                className="w-full h-full object-contain hover:scale-110 hover:transition ease-in-out delay-100 cursor-pointer"
                src={require("../assets/section/partners_research/" +
                  partner.src +
                  ".png")}
                alt={partner.alt}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Partners;
