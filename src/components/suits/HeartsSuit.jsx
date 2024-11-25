import * as React from "react";

const HeartsSuit = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={60}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M4.66 31.04 30 60l25.34-28.96C58.324 27.63 60 23.005 60 18.183v-.816C60 7.776 53.196 0 44.804 0c-4.617 0-8.983 2.398-11.867 6.518L30 10.714l-2.937-4.196C24.179 2.398 19.813 0 15.196 0 6.804 0 0 7.776 0 17.367v.816c0 4.822 1.676 9.447 4.66 12.857Z"
    />
  </svg>
)
export default HeartsSuit;
