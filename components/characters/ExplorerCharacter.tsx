import React from 'react';

interface SVGProps extends React.SVGProps<SVGSVGElement> {}

const ExplorerCharacter: React.FC<SVGProps> = (props) => (
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
    <circle cx="12" cy="12" r="10" />
    <path d="M12 18c-3.5 0-6-2-6-3.5 0-1 .5-2.5 1.5-3.5" />
    <path d="M12 18c3.5 0 6-2 6-3.5 0-1-.5-2.5-1.5-3.5" />
    <path d="M12 14.5V12l-2-1" />
    <path d="M14 11l-2 1" />
    <path d="M12 12v-2" />
    <path d="m14.8 9.5-.9-.9" />
    <path d="m9.2 9.5 1-.9" />
  </svg>
);

export default ExplorerCharacter;
