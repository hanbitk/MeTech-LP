import React from "react";
import Navbar from "./Navbar";
import WhiteLogo from "../assets/header/white-logo.svg";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="bg-darkGreen w-full max-w-screen-2xl h-20 flex justify-between items-center px-20 fixed top-0 z-10">
      <div className="w-52 cursor-pointer" onClick={() => navigate("/")}>
        <img
          className="object-cover"
          src={WhiteLogo}
          alt="White Cattle MeTech's Logo"
        />
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
