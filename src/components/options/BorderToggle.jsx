import { useCardStore } from "../../../useCardStore";

const BorderToggle = () => {

    const { isCardOutlineEnabled, toggleCardOutline } = useCardStore();

    const activePosition = isCardOutlineEnabled ? "translate-x-[100%]" : "translate-x-0";
    const activeTextColor = isCardOutlineEnabled ? "text-black" : "text-slate-200";
    const inactiveTextColor = isCardOutlineEnabled ? "text-slate-200" : "text-black";

    return (
        <div className="w-full  flex items-center justify-between">
            <div className="text-sm lg:text-base">
                Card Border
            </div>
            <div
                className="flex items-center justify-center relative bg-slate-800 rounded-xl overflow-hidden select-none cursor-pointer"
                onClick={() => toggleCardOutline()}
            >
                <div className={`text-xs z-10 py-3 px-6 text-center ${inactiveTextColor} transition-all duration-300 ease-in-out`}>Off</div>
                <div className={`
                absolute z-0 top-0 left-0 w-[50%] h-full bg-slate-100 transition-all duration-300 ease-in-out
                ${activePosition}
            `}></div>
                <div className={`text-xs z-10 py-3 px-6 ${activeTextColor} transition-all duration-300 ease-in-out`}>On</div>
            </div>
        </div>
    );
}

export default BorderToggle;