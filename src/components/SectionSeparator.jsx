import React from 'react';

export default function SectionSeparator() {
  return (
    <div className="wavy-separator-wrapper">
      <svg
        className="wavy-separator"
        viewBox="0 0 1200 24"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M0,12 Q30,4 60,12 T120,12 T180,12 T240,12 T300,12 T360,12 T420,12 T480,12 T540,12 T600,12 T660,12 T720,12 T780,12 T840,12 T900,12 T960,12 T1020,12 T1080,12 T1140,12 T1200,12" />
        <path
          className="sketch-accent"
          d="M2,13 Q32,5 62,13 T122,13 T182,13 T242,13 T302,13 T362,13 T422,13 T482,13 T542,13 T602,13 T662,13 T722,13 T782,13 T842,13 T902,13 T962,13 T1022,13 T1082,13 T1142,13 T1198,13"
        />
      </svg>
    </div>
  );
}
