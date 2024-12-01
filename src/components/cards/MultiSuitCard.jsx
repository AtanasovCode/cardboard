import { useEffect } from "react";
import { useCardStore } from "../../../useCardStore";
import { useGameLogicStore } from "../../../useGameLogicStore";

import CardRank from "./CardRank";
import MultiSuitCenter from "./MultiSuitCenter";

const MultiSuitCard = ({
    suit,
    rank,

    //customization
    backgroundColor,
    size,
    hoverEffect,
    cardOutline,
    outlineGlow,
}) => {


    const {
        getCardOutline,
    } = useCardStore();

    const rankColor = backgroundColor === "#FFFFFF" ? "text-black" : "text-white";

    return (
        <div
            className={`
                relative rounded-xl flex flex-col items-center justify-between aspect-[2/3]
                ${rankColor} ${size} ${hoverEffect} ${cardOutline}
                font-cards select-none
            `}
            style={{ borderColor: getCardOutline(), backgroundColor: backgroundColor, boxShadow: outlineGlow }}
        >
            <CardRank rank={rank} suit={null} invert={false} rankBold={true} rankColor={rankColor} size="w-[15%]" />
            <MultiSuitCenter suit={suit} rank={rank} />
            <CardRank rank={rank} suit={null} invert={true} rankBold={true} rankColor={rankColor} size="w-[15%]" />
        </div >
    );
}

export default MultiSuitCard;