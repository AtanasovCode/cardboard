import { useCardStore } from "../../useCardStore";

const Card = ({
    suit,
    rank,
    cardID,
    backgroundColor,
    rankColor,
    size,
}) => {

    const {
        addCard,
        shuffleCards,
        increaseScore,
        suitStyle,
        cardStyle,
    } = useCardStore();

    return (
        <div
            className={`relative rounded-xl flex items-start justify-center 
            ${backgroundColor} ${size}
            font-cards cursor-pointer select-none m-2`}
            onClick={() => {
                addCard(cardID);
                shuffleCards();
                increaseScore();
            }}
        >
            <div className="w-full flex flex-col items-start justify-center p-2">
                <div className={`text-lg font-semibold mb-2 ${rankColor}`}>
                    {rank}
                </div>
                <div className="flex items-center justify-center">
                    <img src={suit} className="w-4" />
                </div>
            </div>
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <img src={suit} className="w-32" />
            </div>
            <div className="w-full flex flex-col-reverse items-end justify-center absolute bottom-0 left-0 p-2 scale-y-[-1]">
                <div className="flex items-center justify-center">
                    <img src={suit} className="w-4" />
                </div>
                <div className={`text-lg font-semibold mb-2 ${rankColor}`}>
                    {rank}
                </div>
            </div>
        </div>
    );
}

export default Card;