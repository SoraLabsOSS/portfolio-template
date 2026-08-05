import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  "aria-hidden": true,
  fill: "none",
  focusable: false,
  height: 20,
  viewBox: "0 0 24 24",
  width: 20,
  xmlns: "http://www.w3.org/2000/svg",
} as const;

export function HomeIconOutline(props: IconProps) {
  return (
    <svg {...base} className="icon-default" {...props}>
      <path
        d="M9.5 16.5V20H7C5.343 20 4 18.657 4 17V10.538C4 9.573 4.465 8.666 5.249 8.102L10.249 4.508C11.295 3.757 12.705 3.757 13.751 4.508L18.751 8.102C19.535 8.666 20 9.573 20 10.538V17C20 18.657 18.657 20 17 20H14.5V16.5C14.5 15.119 13.381 14 12 14C10.619 14 9.5 15.119 9.5 16.5Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function HomeIconSolid(props: IconProps) {
  return (
    <svg {...base} className="icon-active" {...props}>
      <path
        d="M14.3345 3.69652C12.9396 2.69394 11.0604 2.69393 9.66546 3.69652L4.66546 7.29027C3.61987 8.04178 3 9.25069 3 10.5383V17.0001C3 19.2092 4.79086 21.0001 7 21.0001H8.5C9.05228 21.0001 9.5 20.5524 9.5 20.0001V16.5001C9.5 15.1194 10.6193 14.0001 12 14.0001C13.3807 14.0001 14.5 15.1194 14.5 16.5001V20.0001C14.5 20.5524 14.9477 21.0001 15.5 21.0001H17C19.2091 21.0001 21 19.2092 21 17.0001V10.5383C21 9.25069 20.3801 8.04178 19.3345 7.29027L14.3345 3.69652Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function AboutIconOutline(props: IconProps) {
  return (
    <svg {...base} className="icon-default" {...props}>
      <path
        d="M9 6C8.448 6 8 6.448 8 7C8 7.552 8.448 8 9 8V6ZM15 8C15.552 8 16 7.552 16 7C16 6.448 15.552 6 15 6V8ZM9 10C8.448 10 8 10.448 8 11C8 11.552 8.448 12 9 12V10ZM12 12C12.552 12 13 11.552 13 11C13 10.448 12.552 10 12 10V12ZM7 4H16V2H7V4ZM18 6V18H20V6H18ZM16 20H7V22H16V20ZM6 19V5H4V19H6ZM7 20C6.448 20 6 19.552 6 19H4C4 20.657 5.343 22 7 22V20ZM18 18C18 19.105 17.105 20 16 20V22C18.209 22 20 20.209 20 18H18ZM16 4C17.105 4 18 4.895 18 6H20C20 3.791 18.209 2 16 2V4ZM7 2C5.343 2 4 3.343 4 5H6C6 4.448 6.448 4 7 4V2ZM18 12V14H20V12H18ZM16 16H7V18H16V16ZM7 22H10V20H7V22ZM7 16C5.343 16 4 17.343 4 19H6C6 18.448 6.448 18 7 18V16ZM18 14C18 15.105 17.105 16 16 16V18C18.209 18 20 16.209 20 14H18ZM9 8H15V6H9V8ZM9 12H12V10H9V12Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function AboutIconSolid(props: IconProps) {
  return (
    <svg {...base} className="icon-active" {...props}>
      <path
        clipRule="evenodd"
        d="M7 2C5.34315 2 4 3.34315 4 5V19C4 20.6569 5.34315 22 7 22H16C18.2091 22 20 20.2091 20 18V6C20 3.79086 18.2091 2 16 2H7ZM6 19C6 19.5523 6.44772 20 7 20H16C17.1046 20 18 19.1046 18 18V17.4649C17.4117 17.8052 16.7286 18 16 18H7C6.44772 18 6 18.4477 6 19ZM9 6C8.44772 6 8 6.44772 8 7C8 7.55228 8.44772 8 9 8H15C15.5523 8 16 7.55228 16 7C16 6.44772 15.5523 6 15 6H9ZM8 11C8 10.4477 8.44772 10 9 10H12C12.5523 10 13 10.4477 13 11C13 11.5523 12.5523 12 12 12H9C8.44772 12 8 11.5523 8 11Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export function PlaygroundIconOutline(props: IconProps) {
  return (
    <svg {...base} className="icon-default" {...props}>
      <path
        d="M7 4H17"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M5 7.5H19"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M18.869 11H5.131C3.809 11 2.85 12.261 3.204 13.535L4.39 17.803C4.75 19.101 5.933 20 7.28 20H16.72C18.067 20 19.25 19.101 19.61 17.803L20.796 13.535C21.15 12.261 20.191 11 18.869 11Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function PlaygroundIconSolid(props: IconProps) {
  return (
    <svg {...base} className="icon-active" {...props}>
      <path
        d="M18.868 10C20.8517 10.0003 22.2886 11.8914 21.7577 13.8027L20.5731 18.0703C20.0922 19.8016 18.5154 20.9999 16.7186 21H7.27917C5.48235 21 3.9056 19.8016 3.42468 18.0703L2.24011 13.8027C1.7092 11.8913 3.14603 10.0003 5.12976 10H18.868Z"
        fill="currentColor"
      />
      <path
        d="M18.9989 6.5C19.5511 6.50007 19.9989 6.94776 19.9989 7.5C19.9989 8.05224 19.5511 8.49993 18.9989 8.5H4.9989C4.44661 8.5 3.9989 8.05228 3.9989 7.5C3.9989 6.94772 4.44661 6.5 4.9989 6.5H18.9989Z"
        fill="currentColor"
      />
      <path
        d="M16.9989 3C17.5511 3.00007 17.9989 3.44776 17.9989 4C17.9989 4.55224 17.5511 4.99993 16.9989 5H6.9989C6.44661 5 5.9989 4.55228 5.9989 4C5.9989 3.44772 6.44661 3 6.9989 3H16.9989Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ContactIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M16.737 19.654C15.361 20.507 13.738 21 12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3C16.971 3 21 7.029 21 12C21 13.926 20.043 15.915 17.81 15.713C15.973 15.546 14.651 13.874 14.912 12.048L15.427 8.5M14.858 12.467C14.559 14.596 12.807 16.109 10.944 15.848C9.082 15.586 7.814 13.648 8.114 11.52C8.413 9.391 10.165 7.878 12.027 8.14C13.89 8.401 15.157 10.339 14.858 12.467Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function ExpandIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M8.464 16.95L10.586 19.071C11.367 19.852 12.633 19.852 13.414 19.071L15.536 16.95"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M8.464 7.05L10.586 4.929C11.367 4.148 12.633 4.148 13.414 4.929L15.536 7.05"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function DarkIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M20.964 12.767C19.836 13.545 18.469 14 16.996 14C13.13 14 9.996 10.866 9.996 7C9.996 5.527 10.451 4.16 11.228 3.032C6.619 3.423 3 7.288 3 11.998C3 16.967 7.029 20.996 11.998 20.996C16.708 20.996 20.573 17.377 20.964 12.767Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function LightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        clipRule="evenodd"
        d="M15.536 8.464C17.488 10.417 17.488 13.583 15.536 15.536C13.583 17.488 10.417 17.488 8.464 15.536C6.512 13.583 6.512 10.417 8.464 8.464C10.417 6.512 13.583 6.512 15.536 8.464Z"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M12 3V1M12 23V21M21 12H23M1 12H3M5.636 5.636L4.222 4.222M19.778 19.778L18.364 18.364M18.364 5.636L19.778 4.222M4.222 19.778L5.636 18.364"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function SystemIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V8Z"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16V20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4V8Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export function ChevronIcon(props: IconProps) {
  return (
    <svg {...base} className="menu-list-chevron" {...props}>
      <path
        d="M10 16L12.939 13.061C13.525 12.475 13.525 11.525 12.939 10.939L10 8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function BackIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M10 6L4 12L10 18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M5 12H20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M17.565 3.25H20.532L14.05 10.663L21.675 20.75H15.705L11.029 14.632L5.679 20.75H2.71L9.643 12.821L2.328 3.25H8.45L12.677 8.842L17.565 3.25ZM16.524 18.973H18.168L7.557 4.934H5.793L16.524 18.973Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function CosmosIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M14.251 4.25C14.251 5.493 13.244 6.5 12.001 6.5C10.758 6.5 9.751 5.493 9.751 4.25C9.751 3.007 10.758 2 12.001 2C13.244 2 14.251 3.007 14.251 4.25Z"
        fill="currentColor"
      />
      <path
        d="M14.251 19.75C14.251 20.993 13.244 22 12.001 22C10.758 22 9.751 20.993 9.751 19.75C9.751 18.507 10.758 17.5 12.001 17.5C13.244 17.5 14.251 18.507 14.251 19.75Z"
        fill="currentColor"
      />
      <path
        d="M6.414 6.176C7.491 6.798 7.859 8.174 7.238 9.25C6.617 10.326 5.241 10.695 4.164 10.074C3.088 9.452 2.72 8.076 3.341 7C3.962 5.924 5.338 5.555 6.414 6.176Z"
        fill="currentColor"
      />
      <path
        d="M19.838 13.926C20.914 14.548 21.283 15.924 20.661 17C20.04 18.076 18.664 18.445 17.588 17.824C16.512 17.202 16.143 15.826 16.764 14.75C17.386 13.674 18.762 13.305 19.838 13.926Z"
        fill="currentColor"
      />
      <path
        d="M4.164 13.926C5.241 13.305 6.617 13.674 7.238 14.75C7.859 15.826 7.491 17.202 6.414 17.824C5.338 18.445 3.962 18.076 3.341 17C2.72 15.924 3.088 14.548 4.164 13.926Z"
        fill="currentColor"
      />
      <path
        d="M17.588 6.176C18.664 5.555 20.04 5.924 20.661 7C21.283 8.076 20.914 9.452 19.838 10.074C18.762 10.695 17.386 10.326 16.764 9.25C16.143 8.174 16.512 6.798 17.588 6.176Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M19.65 3H4.35C3.992 3 3.649 3.142 3.395 3.395C3.142 3.649 3 3.992 3 4.35V19.65C3 20.008 3.142 20.351 3.395 20.605C3.649 20.858 3.992 21 4.35 21H19.65C20.008 21 20.351 20.858 20.605 20.605C20.858 20.351 21 20.008 21 19.65V4.35C21 3.992 20.858 3.649 20.605 3.395C20.351 3.142 20.008 3 19.65 3ZM8.4 18.3H5.7V10.2H8.4V18.3ZM7.05 8.625C6.741 8.616 6.441 8.516 6.188 8.338C5.935 8.16 5.74 7.911 5.627 7.622C5.515 7.334 5.49 7.019 5.556 6.716C5.622 6.414 5.775 6.137 5.997 5.921C6.219 5.706 6.5 5.56 6.804 5.503C7.108 5.446 7.422 5.479 7.708 5.6C7.993 5.72 8.236 5.922 8.407 6.18C8.579 6.438 8.67 6.74 8.67 7.05C8.663 7.473 8.489 7.877 8.185 8.172C7.881 8.467 7.463 8.628 7.05 8.625ZM18.3 18.3H15.6V14.115C15.6 12.825 14.985 12.345 14.28 12.345C13.515 12.345 12.825 12.915 12.825 14.145V18.3H10.125V10.2H12.72V11.325C13.14 10.59 14.055 9.825 15.555 9.825C17.28 9.825 18.3 10.89 18.3 13.365V18.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function EmailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M21 8H20V16H21H22V8H21ZM6 5V6H18V5V4H6V5ZM3 16H4V8H3H2V16H3ZM18 19V18H6V19V20H18V19ZM3 16H2C2 18.209 3.791 20 6 20V19V18C4.895 18 4 17.105 4 16H3ZM6 5V4C3.791 4 2 5.791 2 8H3H4C4 6.895 4.895 6 6 6V5ZM21 16H20C20 17.105 19.105 18 18 18V19V20C20.209 20 22 18.209 22 16H21ZM21 8H22C22 5.791 20.209 4 18 4V5V6C19.105 6 20 6.895 20 8H21Z"
        fill="currentColor"
      />
      <path
        d="M21 8.5L13.342 12.329C12.497 12.752 11.503 12.752 10.658 12.329L3 8.5"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
