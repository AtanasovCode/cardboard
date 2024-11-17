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
    allowClick,
    customPadding,
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
            font-cards select-none hover:cursor-pointer`}
            onClick={() => {
                if (allowClick) {
                    addCard(cardID);
                    shuffleCards();
                    increaseScore();
                }
            }}
        >
            <div className={`w-full flex flex-col items-start justify-center p-2 ${customPadding}`}>
                <div className={`text-sm xl:text-lg font-semibold xs:mb-1 ${rankColor} ${customStyling}`}>
                    {rank}
                </div>
                <div className="flex items-center justify-center">
                    <img src={suit} className={`w-3 xl:w-4 ${customSuitSizes}`} />
                </div>
            </div>
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <img src={suit} className="w-16 xl:w-32" />
            </div>
            <div className={`w-full flex flex-col-reverse items-start justify-center absolute bottom-0 left-0 p-2 rotate-[180deg] ${customPadding}`}>
                <div className="flex items-center justify-center">
                    <img src={suit} className={`w-3 xl:w-4 ${customSuitSizes}`} />
                </div>
                <div className={`text-sm xl:text-lg font-semibold xs:mb-1 xl:mb-2 ${rankColor} ${customStyling}`}>
                    {rank}
                </div>
            </div>
        </div >
    );
}

export default Card;