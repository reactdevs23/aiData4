import React from "react";

const ArrowUp = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 11 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.66943 49.7564C4.66943 50.3087 5.11715 50.7564 5.66943 50.7564C6.22172 50.7564 6.66943 50.3087 6.66943 49.7564H4.66943ZM10.1096 10.1766C10.6619 10.1766 11.0524 9.50017 10.7763 9.02187L6.3361 1.33128C6.05996 0.852983 5.27891 0.852983 5.00277 1.33128L0.562598 9.02187C0.286455 9.50017 0.67698 10.1766 1.22926 10.1766H10.1096ZM6.66943 49.7564V9.17657H4.66943V49.7564H6.66943Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowUp;
