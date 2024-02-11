import React from "react";

const ArrowDown = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 11 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.55752 1.72989C6.55752 1.17761 6.10981 0.729889 5.55752 0.729889C5.00524 0.729888 4.55752 1.1776 4.55752 1.72989L6.55752 1.72989ZM1.11733 22.7563C0.56505 22.7563 0.174525 23.4327 0.450667 23.911L4.89083 31.6016C5.16697 32.0799 5.94802 32.0799 6.22416 31.6016L10.6643 23.911C10.9405 23.4327 10.55 22.7563 9.99767 22.7563L1.11733 22.7563ZM4.55752 1.72989L4.5575 23.7563H6.5575L6.55752 1.72989L4.55752 1.72989Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowDown;