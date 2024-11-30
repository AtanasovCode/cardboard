import { useEffect } from "react";
import { useCardStore } from "../../useCardStore";
import { useGameLogicStore } from "../../useGameLogicStore";

import ClassicCard from './cards/ClassicCard';
import RankCard from './cards/RankCard';

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
        getSuitColor,
    } = useCardStore();

    const cardOutline = isCardOutlineEnabled && outline ? `border ${getCardOutline()}` : "border-none";

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
                        outline={outline}
                        allowCLick={allowClick}
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
                        outline={outline}
                        allowCLick={allowClick}
                    />
                );
        }
    }

    return (
        <div className={`${size}`}>
            {displayCard()}
        </div>
    );
}

export default Card;