import * as React from "react";

const ClubsSuit = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full" // Ensures it fills the container without clipping
    viewBox="0 0 60 60" // Define the viewBox to maintain aspect ratio
    fill="none"
    {...props}
  >
    <g fill="#000">
      <path d="M59.999 35.406c-.077-5.372-3.735-10.38-9.323-12.755-2.362-1.004-4.747-1.422-7.227-1.265 1.516-2.381 2.248-5.12 2.084-7.922C45.11 6.199 38.553.292 30.61.014c-4.299-.168-8.322 1.26-11.396 3.967-3.075 2.709-4.768 6.353-4.768 10.258 0 2.52.736 4.987 2.107 7.147-2.48-.158-4.866.26-7.23 1.265C3.736 25.027.077 30.034.002 35.406c-.055 3.84 1.538 7.458 4.483 10.19 2.945 2.73 6.876 4.235 11.07 4.235 3.212 0 6.294-.898 8.89-2.562v1.745a9.11 9.11 0 0 1-1.4 4.82l-1.95 3.122a1.87 1.87 0 0 0 .008 2.031c.403.635 1.121 1.013 1.923 1.013h13.947c.803 0 1.52-.378 1.924-1.013a1.868 1.868 0 0 0 .006-2.03l-1.948-3.122a9.1 9.1 0 0 1-1.4-4.822V47.27c2.596 1.663 5.677 2.561 8.89 2.561 4.193 0 8.124-1.505 11.07-4.235 2.945-2.732 4.538-6.35 4.484-10.19Zm-7.647 7.332c-2.104 1.95-4.913 3.026-7.908 3.026-.614 0-1.11-.456-1.11-1.017 0-.563.496-1.017 1.11-1.017 2.396 0 4.644-.86 6.326-2.42 1.683-1.56 2.593-3.629 2.562-5.825-.008-.562.482-1.023 1.097-1.03h.014c.608 0 1.103.447 1.111 1.004.038 2.744-1.099 5.329-3.202 7.28Z" />
      <rect width={19} height={18} x={39} y={31} rx={9} />
    </g>
  </svg>
);

export default ClubsSuit;
