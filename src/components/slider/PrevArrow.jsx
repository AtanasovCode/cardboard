import { CaretLeft } from "@phosphor-icons/react";

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className="w-9 md:w-10 p-2 rounded-full bg-slate-100 flex items-center justify-center
            absolute top-[50%] translate-y-[-50%] left-[-6%]
            border-4 sm:border-2 border-main-background z-30 cursor-pointer"
            onClick={onClick}
        >
            <CaretLeft size="100%" weight="regular" color="#000" />
        </div>
    );
}

export default PrevArrow;