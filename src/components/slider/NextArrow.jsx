import { useGameLogicStore } from "../../../useGameLogicStore";
import { CaretRight } from "@phosphor-icons/react";

const NextArrow = (props) => {
    
    const { className, style, onClick } = props;

    const { getCursorStyle } = useGameLogicStore(); 

    return (
        <div
            className={`w-9 md:w-10 p-2 rounded-full bg-slate-100 flex items-center justify-center
            absolute top-[50%] translate-y-[-50%] right-[-6%] md:right-[-4%] lg:right-[-2%]
            border-4 border-main-background z-30`}
            style={{...getCursorStyle("hover")}}
            onClick={onClick}
        >
            <CaretRight size="100%" weight="regular" color="#000" />
        </div>
    );
}

export default NextArrow;