import { useCardStore } from "../../useCardStore";
import { useGameLogicStore } from "../../useGameLogicStore";

const Card = ({
    suit,
    rank,
    cardID,
    backgroundColor,
    rankColor,
    size,
    customStyling,
    customSuitSizes,
}) => {

    const {
        shuffleCards,
        addCard,
        increaseScore,
    } = useGameLogicStore();

    return (
        <div
            className={`relative rounded-xl flex items-start justify-center 
            ${backgroundColor} ${size}
            font-cards select-none m-2`}
            onClick={() => {
                addCard(cardID);
                shuffleCards();
                increaseScore();
            }}
        >
            <div className="w-full flex flex-col items-start justify-center p-2">
                <div className={`text-lg font-semibold mb-2 ${rankColor} ${customStyling}`}>
                    {rank}
                </div>
                <div className="flex items-center justify-center">
                    <img src={suit} className={`w-4 ${customSuitSizes}`} />
                </div>
            </div>
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <img src={suit} className="w-32" />
            </div>
            <div className="w-full flex flex-col-reverse items-start justify-center absolute bottom-0 left-0 p-2 rotate-[180deg]">
                <div className="flex items-center justify-center">
                    <img src={suit} className={`w-4 ${customSuitSizes}`} />
                </div>
                <div className={`text-lg font-semibold mb-2 ${rankColor} ${customStyling}`}>
                    {rank}
                </div>
            </div>
        </div>
    );
}

export default Card;