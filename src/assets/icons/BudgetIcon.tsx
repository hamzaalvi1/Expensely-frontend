import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgBudgetIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 19 18"
    {...props}
  >
    <path
      fill="currentColor"
      d="M2 16V2zm0 2q-.824 0-1.412-.587A1.93 1.93 0 0 1 0 16V2Q0 1.176.588.588A1.93 1.93 0 0 1 2 0h14q.824 0 1.413.588Q18 1.175 18 2v2.5h-2V2H2v14h14v-2.5h2V16q0 .824-.587 1.413A1.93 1.93 0 0 1 16 18zm8-4q-.825 0-1.412-.588A1.93 1.93 0 0 1 8 12V6q0-.824.588-1.412A1.93 1.93 0 0 1 10 4h7q.824 0 1.413.588Q19 5.175 19 6v6q0 .825-.587 1.412A1.93 1.93 0 0 1 17 14zm7-2V6h-7v6zm-4-1.5q.624 0 1.063-.437Q14.5 9.625 14.5 9t-.437-1.062A1.45 1.45 0 0 0 13 7.5q-.625 0-1.062.438A1.45 1.45 0 0 0 11.5 9q0 .624.438 1.063.437.437 1.062.437"
    />
  </svg>
);
const Memo = memo(SvgBudgetIcon);
export default Memo;
