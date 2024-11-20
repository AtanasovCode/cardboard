import { useCardStore } from "../../useCardStore";

const BorderToggle = () => {

    const { cardOutline, toggleCardOutline } = useCardStore();

    const activePosition = cardOutline ? "translate-x-[100%]" : "translate-x-0";

    return (
        <div className="w-full flex items-center justify-between  mb-8 md:mb-10">
            <div className="text-left text-sm">
                Card Border
            </div>
            <div
                className="flex items-center justify-center relative bg-slate-700 rounded-xl overflow-hidden select-none cursor-pointer"
                onClick={() => toggleCardOutline()}
            >
                <div className="text-sm z-10 px-4 py-2">Off</div>
                <div className={`
                absolute z-0 top-0 left-0 w-[50%] h-full bg-green-500 transition-all duration-300 ease-in-out
                ${activePosition}
            `}></div>
                <div className="text-sm z-10 px-4 py-2">On</div>
            </div>
        </div>
    );
}

export default BorderToggle;