import * as React from "react"

const DiamondSuit = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={60}
        height={60}
        fill="none"
        {...props}
    >
        <path fill={props.color} stroke={props.outline ? "#FFF" : "none"} d="M30 0 0 30l30 30 30-30L30 0Z" />
    </svg>
)
export default DiamondSuit;
