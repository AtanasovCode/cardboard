import { useEffect } from "react";
import { useCardStore } from "../../../useCardStore";
import { useGameLogicStore } from "../../../useGameLogicStore";

import CardRank from "./CardRank";
import CenterSuit from "./CenterSuit";

const ClassicCard = ({
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
        isOutlineGlowEnabled,
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
            <CardRank rank={rank} suit={suit} invert={false} rankColor={rankColor} size="w-[15%]" />
            <CenterSuit suit={suit} />
            <CardRank rank={rank} suit={suit} invert={true} rankColor={rankColor} size="w-[15%]" />
        </div >
    );
}

export default ClassicCard;