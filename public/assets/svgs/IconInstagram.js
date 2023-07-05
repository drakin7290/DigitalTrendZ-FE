import * as React from "react";
const SvgIconInstagram = ({ title, titleId, ...props }) => (
  <svg
    width="20px"
    height="20px"
    viewBox="0 0 47 47"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role={`icon-default`}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M16.867 44.66h12.798c10.665 0 14.931-4.265 14.931-14.93V16.93C44.596 6.266 40.33 2 29.666 2H16.866C6.202 2 1.936 6.266 1.936 16.931V29.73c0 10.666 4.266 14.931 14.931 14.931Z"
      stroke="#292D32"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23.266 30.796a7.466 7.466 0 1 0 0-14.931 7.466 7.466 0 0 0 0 14.93ZM35.288 12.665h.027"
      stroke="#292D32"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIconInstagram;
