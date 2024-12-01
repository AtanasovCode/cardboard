import { useCardStore } from "../../../useCardStore";
import { Check, CheckFat } from "@phosphor-icons/react";

const BorderToggle = () => {

    const { isCardOutlineEnabled, toggleCardOutline } = useCardStore();

    const backgroundColor = isCardOutlineEnabled ? "bg-active" : "bg-slate-700";
    const activeOpacity = isCardOutlineEnabled ? "opacity-100" : "opacity-0"

    return (
        <div className="w-full  flex items-center justify-between">
            <div className="text-sm lg:text-base">
                Card Border
            </div>
            <div
                className={`
                    flex items-center justify-center relative ${backgroundColor} rounded-lg cursor-pointer w-8 aspect-square
                    transition-colors duration-300 ease-in-out
                `}
                onClick={() => toggleCardOutline()}
            >
                <div className={`w-[70%] ${activeOpacity} transition-opacity duration-300 ease-in-out`}>
                    <Check size="100%" weight="regular" color="#000" />
                </div>
            </div>
        </div>
    );
}

export default BorderToggle;