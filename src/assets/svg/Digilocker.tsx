import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={31}
    height={31}
    stroke="#000"
    strokeWidth={1.92}
    viewBox="0 0 48 48"
    {...props}
  >
    <g id="SVGRepo_iconCarrier">
      <defs>
        <style>
          {
            ".a{fill:none;stroke:#411dc3;stroke-linecap:round;stroke-linejoin:round}"
          }
        </style>
      </defs>
      <path
        d="M8.5 31.19V41.5a2 2 0 0 0 2 2h27a2 2 0 0 0 2-2v-26h-9a2 2 0 0 1-2-2v-9h-18a2 2 0 0 0-2 2v14.135M28.5 4.5l11 11"
        className="a"
      />
      <path
        d="M25.397 21.925c-.043 0-.084.005-.126.006a7.218 7.218 0 0 0-13.488-2.166c-.043-.001-.085-.007-.129-.007a6.154 6.154 0 0 0 0 12.308h13.743a5.07 5.07 0 1 0 0-10.14Z"
        className="a"
      />
    </g>
  </svg>
)
export default SvgComponent
