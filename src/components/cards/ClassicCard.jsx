import { useEffect } from "react";
import { useCardStore } from "../../../useCardStore";
import { useGameLogicStore } from "../../../useGameLogicStore";

import CardRank from "./CardRank";
import CenterSuit from "./CenterSuit";

const ClassicCard = ({
    suit,
    rank,
    cardID,

    //customization
    backgroundColor,
    size,
    hoverEffect,
    outline,
    cardOutline,
    allowClick,
}) => {

    const {
        shuffleCards,
        addCard,
        score,
        increasePersonalBest,
    } = useGameLogicStore();

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
            style={{ borderColor: getCardOutline(), backgroundColor: backgroundColor }}
            onClick={() => {
                if (allowClick) {
                    addCard(cardID);
                    shuffleCards();
                }
            }}
        >
            <CardRank rank={rank} suit={suit} invert={false} rankColor={rankColor} size="w-[15%]" />
            <CenterSuit suit={suit} />
            <CardRank rank={rank} suit={suit} invert={true} rankColor={rankColor} size="w-[15%]"  />
        </div >
    );
}

export default ClassicCard;