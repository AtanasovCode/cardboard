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
}) => {

    const { suitStyle } = useCardStore();

    const borderStyle = isSelected ? "border-white" : "border-slate-500";

    return (
        <div className={`
            w-full aspect-square rounded-md
            border-2 ${borderStyle} relative cursor-pointer
            w-14 xl:w-16
            grid grid-cols-2 gap-1 p-2
        `}
            onClick={handleClick}
        >
            <HeartsSuit color={colors["hearts"]} />
            <SpadesSuit color={colors["spades"]} />
            <DiamondsSuit color={colors["diamonds"]} />
            <ClubsSuit color={colors["clubs"]} />
        </div>
    );
}

export default SuitChoice;