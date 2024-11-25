import * as React from "react";
import { useCardStore } from "../../../useCardStore";
import { getSuitColor } from "../../Utils";

const DiamondsSuit = (props) => {

    const { diamondsColor } = useCardStore();

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full" // Ensures it fills its container
            viewBox="0 0 60 60" // Defines the viewBox to maintain aspect ratio
            fill="none"
            {...props}
        >
            <path
                fill={getSuitColor(diamondsColor)} // Default color if none is provided
                stroke={props.outline ? "#FFF" : "none"} // Adds outline conditionally
                d="M30 0 0 30l30 30 30-30L30 0Z"
            />
        </svg>
    );
}

export default DiamondsSuit;
