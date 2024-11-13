import { useCardStore } from "../../useCardStore";

const Card = ({ suit, rank, cardID }) => {

    const { addCard, shuffleCards } = useCardStore();

    return (
        <div 
            className="relative rounded-xl flex items-start justify-center w-32 h-48 bg-slate-950 
            font-cards cursor-pointer select-none"
            onClick={() => {
                addCard(cardID);
                shuffleCards();
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