import React from "react";
import { CAPSULE_SPECS } from "../utils/constants";

function CapsuleSpecs() {
  return (
    <ul>
      {CAPSULE_SPECS.map((spec, idx) => {
        return (
          <li key={idx}>
            <span className="font-semibold">{spec.title}</span>{" "}
            {spec.description}
          </li>
        );
      })}
    </ul>
  );
}

export default CapsuleSpecs;
