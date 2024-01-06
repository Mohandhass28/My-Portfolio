import React from "react";
import './index.scss'

const AnimateLetter = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((chr, indx) => (
        <span key={chr+indx} className={`${letterClass} _${indx + idx}`}>
            {chr}
        </span>
      ))}
    </span>
  );
};

export default AnimateLetter;
