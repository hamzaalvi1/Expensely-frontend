import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgEdit = (props: SVGProps<SVGSVGElement>) => (
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
    viewBox="0 0 13.5 13.5"
    {...props}
  >
    <path
      fill="#6B7280"
      d="M1.5 12h1.069L9.9 4.669 8.831 3.6 1.5 10.931zM0 13.5v-3.187L9.9.43q.225-.206.497-.318A1.5 1.5 0 0 1 10.969 0q.3 0 .581.113.282.112.487.337L13.07 1.5q.226.206.328.488a1.63 1.63 0 0 1 0 1.134 1.4 1.4 0 0 1-.328.497L3.188 13.5zM12 2.55 10.95 1.5zM9.356 4.144 8.831 3.6 9.9 4.669z"
    />
  </svg>
);
const Memo = memo(SvgEdit);
export default Memo;
