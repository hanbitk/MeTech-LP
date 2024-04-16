import React from "react";

interface IPropsCapSoftware {
  softwareImg: string;
  softwareAlt: string;
}

function CapsuleSoftwareImg({ softwareImg, softwareAlt }: IPropsCapSoftware) {
  return (
    <img
      className="w-[350px] h-full object-contain rounded-md"
      src={require("../assets/service/" + softwareImg + ".png")}
      alt={softwareAlt}
    />
  );
}

export default CapsuleSoftwareImg;
