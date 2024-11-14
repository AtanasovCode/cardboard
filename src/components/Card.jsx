import { useCardStore } from "../../useCardStore";

const Card = ({ suit, rank, cardID }) => {

    const { addCard, shuffleCards, increaseScore, } = useCardStore();

    return (
        <div 
            className="relative rounded-xl flex items-start justify-center w-[100px] h-[150px] lg:w-[150px] lg:h-[225px] bg-card-background
            font-cards cursor-pointer select-none m-2"
            onClick={() => {
                addCard(cardID);
                shuffleCards();
                increaseScore();
            }}
        >
            <div className="w-full flex items-center justify-start p-2">
                <div className="text-lg font-semibold text-white mr-2">
                    {rank}
                </div>
                <div className="flex items-center justify-center">
                    <img src={suit} className="w-4" />
                </div>
            </div>
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <img src={suit} className="w-32" />
            </div>
            <div className="w-full flex items-center justify-end absolute bottom-0 left-0 p-2 scale-y-[-1]">
                <div className="flex items-center justify-center">
                    <img src={suit} className="w-4 mr-2" />
                </div>
                <div className="text-lg font-semibold text-white">
                    {rank}
                </div>
            </div>
        </div>
    );
}

export default Card;