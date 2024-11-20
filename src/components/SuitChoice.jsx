import { useCardStore } from "../../useCardStore";
import { CheckCircle } from "@phosphor-icons/react";

const SuitChoice = ({
    name,
    icon,
    handleClick,
}) => {

    const { suitStyle } = useCardStore();

    const borderStyle = suitStyle === name ? "border-white" : "border-slate-500";

    return (
        <div className={`
            w-full aspect-square rounded-md mx-[3px] xs:mx-1
            border-2 ${borderStyle} relative cursor-pointer
            md:w-10 lg:w-14 xl:w-16
        `}
            onClick={handleClick}
        >
            <div className="w-full h-full flex items-center justify-center">
                <img src={icon} alt={`Suit Style: ${name}`} className="w-[80%]" />
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