import * as React from "react";
const SvgBlob2 = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 900 600"
    width="20px"
    height="20px"
    xmlns="http://www.w3.org/2000/svg"
    role={`icon-default`}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M598.553 161.594c33.9 48 55.3 94.2 49.9 135-5.4 40.8-37.7 76.1-71.6 120.9-33.8 44.9-69.1 99.2-122.2 116.9-53 17.6-123.7-1.3-162.7-46.1-39-44.9-46.3-115.6-38.4-178.4 7.9-62.8 31-117.7 70-165.7 39-48 93.9-89.1 144.4-84.8 50.6 4.4 96.8 54.2 130.6 102.2"
      fill="#1364FB"
    />
  </svg>
);
export default SvgBlob2;
