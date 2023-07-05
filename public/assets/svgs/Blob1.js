import * as React from "react";
const SvgBlob1 = ({ title, titleId, ...props }) => (
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
      d="M616.395 129.483c27.7 26.7 30.4 79.2 33.4 134.7 2.9 55.6 6 114-21.6 164-27.7 50-86.1 91.6-133.1 80-46.9-11.5-82.2-76.2-127.7-126.2s-101.2-85.3-115.3-134.8c-14.1-49.5 13.2-113.2 58.7-139.8 45.5-26.7 109.2-16.4 167.3-10.9 58.1 5.6 110.6 6.3 138.3 33"
      fill="#1364FB"
    />
  </svg>
);
export default SvgBlob1;
