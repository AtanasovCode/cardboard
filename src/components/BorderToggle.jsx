import { useCardStore } from "../../useCardStore";

const BorderToggle = () => {

    const { cardOutline, toggleCardOutline } = useCardStore();

    const activePosition = cardOutline ? "translate-x-[100%]" : "translate-x-0";
    const activeTextColor = cardOutline ? "text-black" : "text-white";
    const inactiveTextColor = cardOutline ? "text-white" : "text-black";

    return (
        <div className="w-full  flex items-center justify-between  mb-12 md:mb-16">
            <div className="w-full text-md lg:text-lg">
                Card Border
            </div>
            <div
                className="flex items-center justify-center relative bg-slate-700 rounded-2xl overflow-hidden select-none cursor-pointer"
                onClick={() => toggleCardOutline()}
            >
                <div className={`text-xs z-10 px-4 py-2 ${inactiveTextColor} transition-all duration-300 ease-in-out`}>Off</div>
                <div className={`
                absolute z-0 top-0 left-0 w-[50%] h-full bg-slate-100 transition-all duration-300 ease-in-out
                ${activePosition} rounded-xl
            `}></div>
                <div className={`text-xs z-10 px-4 py-2 ${activeTextColor} transition-all duration-300 ease-in-out`}>On</div>
            </div>
        </div>
    );
}

export default BorderToggle;