import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgInsight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    overflow="visible"
    preserveAspectRatio="none"
    style={{
      display: 'block',
    }}
    viewBox="0 0 16.5 18.5"
    {...props}
  >
    <path
      fill="#006764"
      d="m13.5 8-.937-2.062L10.5 5l2.063-.937L13.5 2l.938 2.063L16.5 5l-2.062.938zm0 10.5-.937-2.062L10.5 15.5l2.063-.937.937-2.063.938 2.063 2.062.937-2.062.938zM6 16.25l-1.875-4.125L0 10.25l4.125-1.875L6 4.25l1.875 4.125L12 10.25l-4.125 1.875zm0-3.637L6.75 11l1.613-.75L6.75 9.5 6 7.888 5.25 9.5l-1.612.75L5.25 11zm0-2.363"
    />
  </svg>
);
const Memo = memo(SvgInsight);
export default Memo;
