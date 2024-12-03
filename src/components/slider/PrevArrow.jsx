import { useGameLogicStore } from "../../../useGameLogicStore";
import { CaretLeft } from "@phosphor-icons/react";

const PrevArrow = (props) => {

    const { className, style, onClick } = props;

    const { getCursorStyle } = useGameLogicStore();

    return (
        <div
            className={`w-9 md:w-10 p-2 rounded-full bg-slate-100 flex items-center justify-center
            absolute top-[50%] translate-y-[-50%] left-[-6%] md:left-[-4%] lg:left-[-2%]
            border-4 border-main-background z-30`}
            style={{ ...getCursorStyle("hover") }}
            onClick={onClick}
        >
            <CaretLeft size="100%" weight="regular" color="#000" />
        </div>
    );
}

export default PrevArrow;