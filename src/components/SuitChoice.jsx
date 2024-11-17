import { useCardStore } from "../../useCardStore";
import { CheckCircle } from "@phosphor-icons/react";

const SuitChoice = ({
    name,
    icon,
    handleClick,
}) => {

    const { suitStyle } = useCardStore();

    const borderStyle = suitStyle === name ? "border-slate-50" : "border-slate-400";

    return (
        <div 
            className={`
                w-full aspect-square p-4 flex items-center justify-center relative border-2 ${borderStyle}
                rounded-md mx-[2px] md:mx-1 cursor-pointer
            `}
            onClick={handleClick}
        >
            <div className="w-full">
                <img src={icon} alt={`Suit Style: ${name}`} className="w-full" />
            </div>
            {
                (suitStyle === name) &&
                <div className="absolute right-[2%] top-[2%] w-4 h-4">
                    <CheckCircle size="100%" weight="fill" color="#00ff00" />
                </div>
            }
        </div>
    );
}

export default SuitChoice;