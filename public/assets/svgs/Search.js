import * as React from 'react';
const SvgSearch = ({ title, titleId, ...props }) => (
  <svg
    width="20px"
    height="20px"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role={`icon-default`}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="m13.28 13.905 5.725 5.595m-4.012-9.969a6.005 6.005 0 1 1-12.01 0 6.005 6.005 0 0 1 12.01 0Z"
      stroke={'currentColor'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgSearch;
