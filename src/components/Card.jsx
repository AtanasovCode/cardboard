import { useEffect } from "react";
import { useCardStore } from "../../useCardStore";
import { useGameLogicStore } from "../../useGameLogicStore";
import { getCardOutlineColor } from "../Utils";

const Card = ({
    suit,
    rank,
    cardID,

    //customization
    backgroundColor,
    rankColor,
    size,
    margin,
    hoverEffect,
    rankStyling,
    suitStyling,
    centerSuitStyling,
    customPadding,
    outline,
    allowClick,
}) => {

    const {
        shuffleCards,
        addCard,
        increaseScore,
        score,
        personalBest,
        increasePersonalBest,
        gameOver,
    } = useGameLogicStore();

    const {
        cardOutlineColor,
    } = useCardStore();

    const cardOutline = outline ? `border ${getCardOutlineColor(cardOutlineColor)}` : "border-none";

    useEffect(() => {
        increasePersonalBest();
    }, [score])

    console.log(`PB: ${personalBest}`);

    return (
        <div
            className={`
                relative rounded-xl flex items-start justify-center aspect-[2/3]
                ${backgroundColor} ${size} ${margin} ${hoverEffect} ${cardOutline}
                font-cards select-none
            `}
            onClick={() => {
                if (allowClick) {
                    addCard(cardID);
                    shuffleCards();
                }
            }}
        >
            <div className={`w-full flex flex-col items-start justify-center p-2 ${customPadding}`}>
                <div className={`text-sm xl:text-lg font-semibold xs:mb-1 ${rankStyling}`}>
                    {rank}
                </div>
                <div className="flex items-center justify-center">
                    <img src={suit} className={`w-3 xl:w-4 ${suitStyling}`} />
                </div>
            </div>
            <div className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}>
                <img src={suit} className={`w-16 xl:w-32 ${centerSuitStyling}`} />
            </div>
            <div className={`w-full flex flex-col-reverse items-start justify-center absolute bottom-0 left-0 p-2 rotate-[180deg] ${customPadding}`}>
                <div className="flex items-center justify-center">
                    <img src={suit} className={`w-3 xl:w-4 ${suitStyling}`} />
                </div>
                <div className={`text-sm xl:text-lg font-semibold xs:mb-1 xl:mb-2 ${rankStyling}`}>
                    {rank}
                </div>
            </div>
        </div >
    );
}

export default Card;