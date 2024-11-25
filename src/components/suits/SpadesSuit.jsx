import * as React from "react";

const SpadesSuit = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full" // Ensures the SVG scales to its container
    viewBox="0 0 60 60" // Defines the viewBox for consistent aspect ratio
    fill="none"
    {...props}
  >
    <path
      fill={props.color || "#000"} // Default fill color if none is provided
      d="M31.168.749c-.41-.417-.34-.378-.34-.378a1.113 1.113 0 0 0-1.656 0s.072-.039-.34.378C18.692 11.11 0 16.98 0 31.896c0 .766.037 1.565.114 2.395.817 8.757 7.826 13.725 15.398 13.725 4.299 0 8.383-2.595 11.114-6.358-1.28 7.275-2.924 15.347-3.386 16.35-.786 1.707.157 1.992.628 1.992h12.264c.471 0 1.413-.285.628-1.992-.46-1.003-2.107-9.075-3.385-16.35 2.73 3.763 6.814 6.358 11.113 6.358 7.574 0 14.581-4.968 15.4-13.725.076-.83.112-1.629.112-2.395C60 16.98 41.308 11.111 31.168.75Z"
    />
  </svg>
);

export default SpadesSuit;
