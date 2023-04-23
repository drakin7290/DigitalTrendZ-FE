import * as React from 'react';
const SvgNotiNo = ({ title, titleId, ...props }) => (
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
      d="M1.933 19.053a.767.767 0 0 1 .26-.574A9.5 9.5 0 0 0 3.82 16.55a8.32 8.32 0 0 0 .887-3.16V10.1h.1a7.207 7.207 0 0 1 6.22-7.153L1.933 19.053Zm0 0v.907a.766.766 0 0 0 .767.767h18.533A.766.766 0 0 0 22 19.96v-.907a.767.767 0 0 0-.26-.575 9.502 9.502 0 0 1-1.653-1.928M1.933 19.053l18.154-2.503M19.2 10.1a7.306 7.306 0 0 0-6.293-7.254v-.773a.99.99 0 1 0-1.98 0v.787L19.1 10.1m.1 0h-.1m.1 0h-.1m.1 0v3.29m-.1-3.29v3.293m.1-.003v-.004l-.1.007m.1-.003a8.32 8.32 0 0 0 .887 3.16m-.887-3.16v.003h-.1m0 0 .987 3.157m-1.278.797c.42.667.913 1.286 1.467 1.846H3.663c.555-.56 1.047-1.18 1.468-1.846l.004-.007a9.593 9.593 0 0 0 1.111-3.94V10.096a5.727 5.727 0 1 1 11.447 0v3.302a9.593 9.593 0 0 0 1.112 3.941l.004.007Z"
      fill={'currentColor'}
      stroke={'currentColor'}
      strokeWidth={0.2}
    />
    <path d="M12 22.853a1.78 1.78 0 0 0 1.72-1.52h-3.507A1.78 1.78 0 0 0 12 22.853Z" fill={'currentColor'} />
  </svg>
);
export default SvgNotiNo;
