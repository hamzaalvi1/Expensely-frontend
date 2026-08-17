import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgCategoriesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 19 20"
    {...props}
  >
    <path
      fill="currentColor"
      d="M3.5 9 9 0l5.5 9zm11 11q-1.875 0-3.187-1.312Q10 17.375 10 15.5t1.313-3.187T14.5 11t3.188 1.313T19 15.5t-1.312 3.188T14.5 20M0 19.5v-8h8v8zM14.5 18q1.05 0 1.775-.725T17 15.5t-.725-1.775T14.5 13t-1.775.725T12 15.5t.725 1.775T14.5 18M2 17.5h4v-4H2zM7.05 7h3.9L9 3.85zm7.45 8.5"
    />
  </svg>
);
const Memo = memo(SvgCategoriesIcon);
export default Memo;
