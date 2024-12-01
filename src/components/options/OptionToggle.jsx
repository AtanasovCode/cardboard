import { useCardStore } from "../../../useCardStore";
import { Check } from "@phosphor-icons/react";

const OptionToggle = ({
    title,
    handleClick,
    active,
    activeStyling,
}) => {

    const backgroundColor = active ? "border-none bg-active" : "border-2 border-slate-400";
    const activeCheck = active ? "opacity-100" : "opacity-0";

    return (
        <div className={`
            w-full  flex items-center justify-between ${activeStyling}
            transition-opacity duration-300 ease-in-out
        `}>
            <div className="text-sm lg:text-base">
                {title}
            </div>
            <div
                className={`
                    flex items-center justify-center relative ${backgroundColor} rounded-lg cursor-pointer w-8 aspect-square
                    transition-colors duration-300 ease-in-out
                `}
                onClick={() => handleClick()}
            >
                <div className={`w-[70%] ${activeCheck} transition-opacity duration-300 ease-in-out`}>
                    <Check size="100%" weight="regular" color="#000" />
                </div>
            </div>
        </div>
    );
}

export default OptionToggle;