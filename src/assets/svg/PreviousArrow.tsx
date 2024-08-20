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
    <title>{"previous [#ffffff]"}</title>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M11.999.868v6.263c0 .714-1.145 1.122-1.781.694L5.999 5.14v1.991c0 .714-.573 1.122-1.209.694L.479 4.693c-.514-.347-.681-1.04-.167-1.387L4.79.176c.636-.43 1.209-.022 1.209.692V2.86L10.218.175c.636-.429 1.781-.02 1.781.693"
    />
  </svg>
)
export default SvgComponent
