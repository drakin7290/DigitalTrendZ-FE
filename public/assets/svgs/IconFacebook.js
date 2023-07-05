import * as React from "react";
const SvgIconFacebook = ({ title, titleId, ...props }) => (
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
      d="M27.596 17.571v6.186h5.546c.427 0 .64.426.64.853l-.853 4.053c0 .213-.427.427-.64.427h-4.693v15.57h-6.399V29.304h-3.626c-.427 0-.64-.213-.64-.64V24.61c0-.427.213-.64.64-.64h3.626v-7.039c0-3.626 2.773-6.399 6.4-6.399h5.758c.427 0 .64.213.64.64v5.12c0 .426-.213.64-.64.64h-5.119c-.426 0-.64.213-.64.64Z"
      stroke="#17191C"
      strokeWidth={3}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M29.73 44.66H16.93C6.266 44.66 2 40.395 2 29.73V16.93C2 6.266 6.266 2 16.931 2H29.73C40.395 2 44.66 6.266 44.66 16.931V29.73c0 10.666-4.265 14.931-14.93 14.931Z"
      stroke="#17191C"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIconFacebook;
