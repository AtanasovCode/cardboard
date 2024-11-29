import { useEffect } from "react";
import { useCardStore } from "../../../useCardStore";
import { useGameLogicStore } from "../../../useGameLogicStore";

import CenterRank from "./CenterRank";
import CardRank from "./CardRank";

const RankCard = ({
    suit,
    rank,
    cardID,
    suitName,
    customColor,

    //customization
    backgroundColor,
    size,
    hoverEffect,
    outline,
    allowClick,
    rankStyle,
}) => {

    const {
        shuffleCards,
        addCard,
        score,
        increasePersonalBest,
    } = useGameLogicStore();

    const {
        isCardOutlineEnabled,
        getCardOutline,
    } = useCardStore();

    const cardOutline = isCardOutlineEnabled && outline ? `border` : "border-none";
    const rankColor = backgroundColor === "bg-card-white" ? "text-black" : "text-white";

    useEffect(() => {
        increasePersonalBest();
    }, [score])

    return (
        <div
            className={`
                relative rounded-xl flex flex-col items-center justify-between aspect-[2/3]
                ${rankColor} ${size} ${hoverEffect} ${cardOutline}
                font-cards select-none
            `}
            style={{borderColor: getCardOutline(), backgroundColor: backgroundColor}}
            onClick={() => {
                if (allowClick) {
                    addCard(cardID);
                    shuffleCards();
                }
            }}
        >
            <CardRank rank={null} suit={suit} invert={false} rankStyle={rankStyle} />
            <CenterRank rank={rank} suitName={suitName} customColor={customColor} />
            <CardRank rank={null} suit={suit} invert={true} rankStyle={rankStyle} />
        </div >
    );
}

export default RankCard;