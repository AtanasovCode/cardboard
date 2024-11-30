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
    cardOutline,
    size,
    hoverEffect,
    allowClick,
}) => {

    const {
        shuffleCards,
        addCard,
    } = useGameLogicStore();

    const {
        getCardOutline,
    } = useCardStore();

    return (
        <div
            className={`
                relative rounded-xl flex flex-col items-center justify-between aspect-[2/3]
                ${size} ${hoverEffect} ${cardOutline}
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
            <CardRank rank={null} suit={suit} invert={false} size="w-[17%]" rankColor={null} />
            <CenterRank rank={rank} suitName={suitName} customColor={customColor} />
            <CardRank rank={null} suit={suit} invert={true} size="w-[17%]" rankColor={null}  />
        </div >
    );
}

export default RankCard;