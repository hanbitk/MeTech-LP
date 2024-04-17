import React from "react";
import { NavLink } from "react-router-dom";
import { PRESS_RELEASES } from "../utils/releases";

interface IisReleasePageProp {
  width: string;
  alignItems?: string;
  justifyContent?: string;
  textAlign?: string;
  textSize: string;
  isReleasePage: boolean;
}

function News({
  width,
  alignItems,
  justifyContent,
  textAlign,
  textSize,
  isReleasePage,
}: IisReleasePageProp) {
  return (
    <>
      {PRESS_RELEASES.map((release, idx) => {
        return (
          <div
            key={idx}
            className={`${width} flex flex-col ${justifyContent} ${alignItems}`}
          >
            {isReleasePage && (
              <div className="w-[250px] h-[150px]">
                <img
                  className="w-full h-full object-contain"
                  src={require("../assets/releases/" + release.src + ".jpg")}
                  alt={release.alt}
                />
              </div>
            )}
            <h2
              className={`${textAlign} ${textSize} font-semibold mt-2 mb-2 cursor-default underline underline-offset-4 hover:text-darkGreen`}
            >
              {release.title}
            </h2>
            <p className="text-darkGray text-xs">
              <NavLink
                className="hover:font-semibold"
                to={release.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </NavLink>
            </p>
          </div>
        );
      })}
    </>
  );
}

export default News;
