import { useEffect } from "react";
import { useCardStore } from "../../useCardStore";
import { useGameLogicStore } from "../../useGameLogicStore";
import { getCardOutlineColor } from "../Utils";

import CardRank from "./CardRank";
import CenterSuit from "./CenterSuit";

const Card = ({
    suit,
    rank,
    cardID,

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
        cardOutlineColor,
    } = useCardStore();

    const cardOutline = outline ? `border ${getCardOutlineColor(cardOutlineColor)}` : "border-none";

    useEffect(() => {
        increasePersonalBest();
    }, [score])

    return (
        <div
            className={`
                relative rounded-xl flex flex-col items-center justify-between aspect-[2/3]
                ${backgroundColor} ${size} ${hoverEffect} ${cardOutline}
                font-cards select-none
            `}
            onClick={() => {
                if (allowClick) {
                    addCard(cardID);
                    shuffleCards();
                }
            }}
        >
            <CardRank rank={rank} suit={suit} invert={false} rankStyle={rankStyle} />
            <CenterSuit suit={suit} />
            <CardRank rank={rank} suit={suit} invert={true} rankStyle={rankStyle} />
        </div >
    );
}

export default Card;