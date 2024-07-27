import React from "react";

function Logo() {
  return (
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <title>Logo</title>
      <g>
        <g id="J" transform="translate(35.000000, 35.000000)">
          <path
            fill="currentColor"
            d="M 6 15 L 4 15 C 3.5 19.8945 7.6055 24 12.75 24 C 17.8945 24 22 19.8945 22 14.75 L 22 12 C 22 3 22 0 22 0 L 19 0 C 18 0 17 0 17 0 L 17 15 C 17.5 17.5117 15.5117 19.5 12.75 19.5 C 9.9883 19.5 8 17.5117 8 15 Z"
          />
        </g>
        <path
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 50, 5
              L 11, 27
              L 11, 72
              L 50, 95
              L 89, 73
              L 89, 28 z"
        />
      </g>
    </svg>
  );
}

export default Logo;
