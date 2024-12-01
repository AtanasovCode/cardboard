import { useCardStore } from "../../../useCardStore";
import { Check } from "@phosphor-icons/react";

const OptionToggle = ({
    type,
    title,
    handleClick,
    active,
}) => {

    const { isCardOutlineEnabled } = useCardStore();

    const backgroundColor = active ? "bg-active" : "bg-slate-500";
    const activeCheck = active ? "opacity-100" : "opacity-0";

    const activeStyling = isCardOutlineEnabled ? "opacity-100" : "opacity-30 pointer-events-none";

    return (
        <div className={`
            w-full  flex items-center justify-between ${type !== "border" && activeStyling}
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