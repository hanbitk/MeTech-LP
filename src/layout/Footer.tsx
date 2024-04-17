import React from "react";
import FooterNavBar from "../components/FooterNavBar";
import Location from "../components/Location";
import WhiteLogo from "../assets/footer/white_logo.svg";

function Footer() {
  return (
    <footer className="bg-darkGreen w-full h-[450px] flex flex-col justify-between items-center px-20 py-8">
      <div className="w-full h-full flex flex-col justify-between">
        {/* Company Location */}
        <div className="flex h-full gap-2 py-6">
          <div className="border-lightGreen border-r-2 w-[30%] flex flex-col justify-center gap-10">
            {/* Removed USA Location Data - justify-between */}
            <Location />
          </div>
          {/* Footer NavBar */}
          <div className="w-[70%] flex items-center">
            <div className="w-full flex justify-around">
              <FooterNavBar />
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="h-[20%] flex flex-col gap-2 items-center py-2">
          <div>
            <img src={WhiteLogo} alt="White MeTech Logo" />
          </div>
          <p className="text-white text-xs font-semibold">
            Copyright ⓒ 2024 MeTechHoldings Co., Inc. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
