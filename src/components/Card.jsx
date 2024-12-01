import { useEffect } from "react";
import { useCardStore } from "../../useCardStore";
import { useGameLogicStore } from "../../useGameLogicStore";

import ClassicCard from './cards/ClassicCard';
import RankCard from './cards/RankCard';
import MultiSuitCard from "./cards/MultiSuitCard";

const Card = ({
    suit,
    rank,
    cardID,
    suitName,

    //customization
    backgroundColor,
    size,
    hoverEffect,
    outline,
    allowClick,
    allowGlow,
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
        cardType,
        isOutlineGlowEnabled,
    } = useCardStore();

    const cardOutline = isCardOutlineEnabled && outline ? `border ${getCardOutline()}` : "border-none";
    const outlineGlow = isOutlineGlowEnabled && allowGlow && isCardOutlineEnabled
    ? `0 0 12px 2px ${getCardOutline()}`
    : "";

    useEffect(() => {
        increasePersonalBest();
    }, [score])

    const displayCard = () => {
        switch (cardType) {
            case "classic":
                return (
                    <ClassicCard
                        suit={suit}
                        rank={rank}
                        cardID={cardID}
                        size="w-full h-full"
                        backgroundColor={backgroundColor}
                        hoverEffect={hoverEffect}
                        suitNam={suitName}
                        cardOutline={cardOutline}
                        outlineGlow={outlineGlow}
                        outline={outline}
                    />
                );
            case "bold":
                return (
                    <RankCard
                        suit={suit}
                        rank={rank}
                        suitName={suitName}
                        cardID={cardID}
                        size="w-full h-full"
                        backgroundColor={backgroundColor}
                        hoverEffect={hoverEffect}
                        cardOutline={cardOutline}
                        outlineGlow={outlineGlow}
                        outline={outline}
                    />
                );
            case "multi-suit":
                return (
                    <MultiSuitCard
                        suit={suit}
                        rank={rank}
                        suitName={suitName}
                        cardID={cardID}
                        size="w-full h-full"
                        backgroundColor={backgroundColor}
                        hoverEffect={hoverEffect}
                        cardOutline={cardOutline}
                        outlineGlow={outlineGlow}
                        outline={outline}
                    />
                );
        }
    }

    return (
        <div
            className={`${size}`}
            onClick={() => {
                if (allowClick) {
                    addCard(cardID)
                    shuffleCards();
                }
            }}
        >
            {displayCard()}
        </div>
    );
}

export default Card;