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

    const outlineGlow = isOutlineGlowEnabled && allowGlow && isCardOutlineEnabled
    ? `0 0 12px 2px ${getCardOutline(suitName)}`
    : "";
    const borderStyle = isCardOutlineEnabled ? "2px" : "0";

    useEffect(() => {
        increasePersonalBest();
    }, [score])

    const displayCard = () => {
        switch (cardType) {
            case "classic":
                return (
                    <ClassicCard
                        suit={suit}
                        suitName={suitName}
                        rank={rank}
                        cardID={cardID}
                        size="w-full h-full"
                        backgroundColor={backgroundColor}
                        borderStyle={borderStyle}
                        hoverEffect={hoverEffect}
                        suitNam={suitName}
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
                        borderStyle={borderStyle}
                        size="w-full h-full"
                        backgroundColor={backgroundColor}
                        hoverEffect={hoverEffect}
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
                        borderStyle={borderStyle}
                        backgroundColor={backgroundColor}
                        hoverEffect={hoverEffect}
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