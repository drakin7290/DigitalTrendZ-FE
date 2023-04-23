import * as React from 'react';
const SvgLogout = ({ title, titleId, ...props }) => (
  <svg
    width="20px"
    height="20px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role={`icon-default`}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M3.071 12.02h9.92m-2.012-2.49 3.232 2.476-3.232 2.468m-4.94-5.357V5.06a2 2 0 0 1 2-2h10.902a2 2 0 0 1 2 2v14.007a2 2 0 0 1-2 2H8.04a2 2 0 0 1-2-2v-3.936"
      stroke="#282828"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgLogout;
