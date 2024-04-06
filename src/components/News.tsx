import React from "react";
import { NavLink } from "react-router-dom";
import { PRESS_RELEASES } from "../utils/releases";

function News() {
  return (
    <>
      {PRESS_RELEASES.map((release, idx) => {
        return (
          <div key={idx} className="w-3/4 flex flex-col gap-4">
            <h2 className="text-xl font-semibold underline underline-offset-4 hover:text-darkGreen">
              {release.title}
            </h2>
            <p className="text-darkGray text-sm">
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
