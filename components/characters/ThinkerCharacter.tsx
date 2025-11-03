import React from 'react';

interface SVGProps extends React.SVGProps<SVGSVGElement> {}

const ThinkerCharacter: React.FC<SVGProps> = (props) => (
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
    <circle cx="12" cy="5" r="3" />
    <path d="M12 8v7" />
    <path d="M12 15l-4 4" />
    <path d="M12 15l4 4" />
    <path d="M5 12l-2 2 2 2" />
    <path d="M19 12l2 2-2 2" />
  </svg>
);

export default ThinkerCharacter;
