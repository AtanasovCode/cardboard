import { useEffect } from "react";
import { useCardStore } from "../../../useCardStore";
import { useGameLogicStore } from "../../../useGameLogicStore";

import CardRank from "./CardRank";
import MultiSuitCenter from "./MultiSuitCenter";

const MultiSuitCard = ({
    suit,
    rank,
    suitName,

    //customization
    borderStyle,
    backgroundColor,
    size,
    hoverEffect,
    outlineGlow,
}) => {


    const {
        getCardOutline,
        isCardOutlineEnabled,
    } = useCardStore();

    const rankColor = backgroundColor === "#FFFFFF" ? "text-black" : "text-white";

    return (
        <div
            className={`
                relative rounded-xl flex flex-col items-center justify-between aspect-[2/3]
                ${rankColor} ${size} ${hoverEffect}
                font-cards select-none
            `}
            style={{
                border: isCardOutlineEnabled ? `2px solid ${getCardOutline(suitName)}` : `none`,
                backgroundColor: backgroundColor,
                boxShadow: outlineGlow
            }}
        >
            <CardRank rank={rank} suit={null} invert={false} rankBold={true} rankColor={rankColor} size="w-[15%]" />
            <MultiSuitCenter suit={suit} rank={rank} />
            <CardRank rank={rank} suit={null} invert={true} rankBold={true} rankColor={rankColor} size="w-[15%]" />
        </div >
    );
}

export default MultiSuitCard;