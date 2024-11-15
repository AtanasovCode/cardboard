import useMousePosition from "../hooks/useMousePosition";

import spadesCursor from '../assets/spades-cursor.svg';

const CustomCursor = () => {
    const { x, y } = useMousePosition();

    return (
        <div
            style={{ left: `${x}px`, top: `${y}px` }}
            className="hidden
                fixed top-0 left-0 w-[40px] h-[60px] sm:w-[50px] sm:h-[75px]
                lg:flex items-center justify-center
                translate-x-[-50%] translate-y-[-50%] z-[999]
                pointer-events-none transition-transform transform-gpu ease-in-out
            "
        >
            <div>
                <img src={spadesCursor} className="w-16 rotate-[-35deg]" />
            </div>
        </div>
    );
};

export default CustomCursor;