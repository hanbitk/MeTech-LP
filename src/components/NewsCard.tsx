import React from "react";
import { NavLink } from "react-router-dom";

interface INewsCardProps {
  title: string;
  url: string;
  src: string;
  alt: string;
}

function NewsCard({ title, url, src, alt }: INewsCardProps) {
  return (
    <div className="border">
      <img
        className="w-[250px] h-[150px] object-contain"
        src={require("../assets/releases/" + src + ".jpg")}
        alt={alt}
      />
      <h2 className="text-xl font-semibold cursor-default underline underline-offset-4 hover:text-darkGreen">
        {title}
      </h2>
      <p className="text-darkGray text-sm">
        <NavLink
          className="hover:font-semibold"
          to={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </NavLink>
      </p>
    </div>
  );
}

export default NewsCard;
