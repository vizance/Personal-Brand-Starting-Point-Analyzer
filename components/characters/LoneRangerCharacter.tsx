import React from 'react';

interface SVGProps extends React.SVGProps<SVGSVGElement> {}

const LoneRangerCharacter: React.FC<SVGProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M3 3v18h18" />
    <path d="M7 16V8" />
    <path d="M12 16v-5" />
    <path d="M17 16V3" />
    <circle cx="17" cy="3" r="1" fill="currentColor" />
  </svg>
);

export default LoneRangerCharacter;
