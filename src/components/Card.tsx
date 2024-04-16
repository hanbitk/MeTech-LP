import React from "react";

interface ICardsProps {
  title: string;
  src: string;
  alt: string;
  description: string;
  textColor: string;
}

function Card({ title, src, alt, description, textColor }: ICardsProps) {
  return (
    <div
      className={`w-[30%] flex flex-col items-center ${textColor} text-center`}
    >
      <h2 className="w-2/3 font-semibold">{title}</h2>
      <div>
        <img
          className="w-[250px] h-[150px] object-contain p-2"
          src={require("../assets/service/" + src + ".png")}
          alt={alt}
        />
      </div>
      <p className="w-[85%] text-sm font-light">{description}</p>
    </div>
  );
}

export default Card;
