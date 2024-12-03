import useMousePosition from "../hooks/useMousePosition";

import spadesCursor from '../assets/spades-cursor.svg';

const CustomCursor = () => {
    const { x, y } = useMousePosition();

    return (
        <div
            style={{ left: `${x}px`, top: `${y}px` }}
            className="
                hidden fixed top-0 left-0
                lg:flex items-center justify-center
                translate-x-[-32%] translate-y-[-17%] z-[99999]
                pointer-events-none transition-transform transform-gpu ease-in-out
            "
        >
            <div>
                <img src={spadesCursor} className="w-[42px] rotate-[-35deg]" />
            </div>
        </div>
    );
};

export default CustomCursor;
