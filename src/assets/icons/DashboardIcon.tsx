import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgDashboardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      fill="currentColor"
      d="M10 6V0h8v6zM0 10V0h8v10zm10 8V8h8v10zM0 18v-6h8v6zM2 8h4V2H2zm10 8h4v-6h-4zm0-12h4V2h-4zM2 16h4v-2H2z"
    />
  </svg>
);
const Memo = memo(SvgDashboardIcon);
export default Memo;
