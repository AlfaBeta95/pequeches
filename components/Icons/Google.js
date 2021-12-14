
import * as React from "react"

export default function Google(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={27}
      height={27}
      fill="none"
      {...props}
    >
      <path
        // fillRule="evenodd"
        // clipRule="evenodd"
        d="M15 3C8.373 3 3 8.373 3 15s5.373 12 12 12 12-5.373 12-12S21.627 3 15 3zm-3 18a6 6 0 1 1 4.047-10.427l-1.434 1.404A3.973 3.973 0 0 0 12 11a4 4 0 0 0 0 8 3.998 3.998 0 0 0 3.94-3.333H12v-2h5.843l.033.133c.08.388.124.789.124 1.2a6 6 0 0 1-6 6zm11-5v2h-2v-2h-2v-2h2v-2h2v2h2v2h-2z"
        // fill={props.fill}
      />
    </svg>
  )
}
