import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    viewBox="0 -2 12 12"
    {...props}
  >
    <title>{"next [#ffffff]"}</title>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="m11.684 4.694-4.477 3.13C6.571 8.255 6 7.847 6 7.133V5.14L1.78 7.825c-.635.429-1.78.02-1.78-.693V.869C0 .155 1.145-.253 1.78.175L6 2.86V.869c0-.714.571-1.122 1.207-.694l4.309 3.132c.514.347.682 1.04.168 1.387"
    />
  </svg>
)
export default SvgComponent
