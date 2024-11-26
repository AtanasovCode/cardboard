import { useCardStore } from "../../useCardStore";
import { CheckCircle } from "@phosphor-icons/react";

import HeartsSuit from "./suits/HeartsSuit";
import DiamondsSuit from "./suits/DiamondsSuit";
import SpadesSuit from "./suits/SpadesSuit";
import ClubsSuit from "./suits/ClubsSuit";

const SuitChoice = ({
    name,
    handleClick,
    color,
    colors,
    isSelected,
    idx,
}) => {

    const { suitStyle } = useCardStore();

    const borderStyle = isSelected ? "border-white" : "border-slate-500";

    return (
        <div className={`
            w-full aspect-square rounded-xl
            border-2 ${borderStyle} relative cursor-pointer
            grid grid-cols-2 gap-1 p-1
        `}
            onClick={handleClick}
        >
            <HeartsSuit color={colors["hearts"]} />
            <SpadesSuit color={colors["spades"]} />
            <DiamondsSuit color={colors["diamonds"]} />
            <ClubsSuit color={colors["clubs"]} />
            {isSelected && (
                <div className="absolute right-[2%] top-[2%] w-4 h-4">
                    <CheckCircle size="100%" weight="fill" color="#00ff00" />
                </div>
            )}
        </div>
    );
}

export default SuitChoice;