import * as React from "react";
const SvgIconMessenger = ({ title, titleId, ...props }) => (
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
      d="M10.232 36.982v7.678l7.039-4.052c1.92.64 4.052.853 6.399.853C35.4 41.461 45 32.716 45 21.624 45 10.745 35.401 2 23.67 2 11.938 2 2.34 10.745 2.34 21.837c0 6.186 2.986 11.518 7.892 15.145Z"
      stroke="#17191C"
      strokeWidth={3}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m22.177 17.358-8.106 9.598 7.892-1.92 3.2 1.92 8.105-9.598-7.465 1.92-3.626-1.92Z"
      stroke="#17191C"
      strokeWidth={3}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIconMessenger;
