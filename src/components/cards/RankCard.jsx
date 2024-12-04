import { useEffect } from "react";
import { useCardStore } from "../../../useCardStore";
import { useGameLogicStore } from "../../../useGameLogicStore";

import CenterRank from "./CenterRank";
import CardRank from "./CardRank";

const RankCard = ({
    suit,
    rank,
    suitName,
    customColor,

    //customization
    backgroundColor,
    outlineGlow,
    size,
    hoverEffect,
}) => {

    const {
        isCardOutlineEnabled,
        getCardOutline,
    } = useCardStore();

    return (
        <div
            className={`
                relative rounded-xl flex flex-col items-center justify-between aspect-[2/3]
                ${size} ${hoverEffect} z-60
                font-cards select-none
            `}
            style={{
                border: isCardOutlineEnabled ? `2px solid ${getCardOutline(suitName)}` : `none`,
                backgroundColor: backgroundColor,
                boxShadow: outlineGlow
            }}
        >
            <CardRank rank={null} suit={suit} invert={false} size="w-[17%]" rankColor={null} />
            <CenterRank rank={rank} suitName={suitName} customColor={customColor} />
            <CardRank rank={null} suit={suit} invert={true} size="w-[17%]" rankColor={null} />
        </div >
    );
}

export default RankCard;