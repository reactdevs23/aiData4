import React from "react";

const Option = ({ text, textColor }) => {
  return (
    <svg
      width="137"
      height="86"
      viewBox="0 0 137 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Shape"
        d="M65.3555 0.925931C67.3117 -0.308644 69.8035 -0.308644 71.7598 0.925931L133.683 37.7909C137.413 40.1451 137.413 45.5848 133.683 47.939L71.7598 84.804C69.8035 86.0386 67.3117 86.0386 65.3555 84.804L3.43261 47.939C-0.297849 45.5848 -0.297847 40.1451 3.43261 37.7909L65.3555 0.925931Z"
        fill="#FFC700"
      />
      <text
        x="50%"
        y="50%"
        fill={textColor}
        dominant-baseline="middle"
        text-anchor="middle"
      >
        {text}
      </text>
      ;
    </svg>
  );
};

export default Option;
