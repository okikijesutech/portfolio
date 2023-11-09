import { SVGAttributes } from "react";

export function Bars3BottomRightIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      {...props}
      aria-hidden='true'
      fill='none'
      stroke='#000000'
      strokeWidth='1.5'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>
    </svg>
  );
}

export function XMarkIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      {...props}
      aria-hidden='true'
      fill='none'
      stroke='#000000'
      strokeWidth='1.5'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6 18L18 6M6 6l12 12'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>
    </svg>
  );
}
