import { useCardStore } from "../../useCardStore";
import { useEffect } from "react";
import Card from "../components/Card";

const TitleScreen = () => {

    const {
        displayedCards,
        generateRandomCards,
    } = useCardStore();

    useEffect(() => {
        generateRandomCards(5);
    }, [])

    return (
        <div className="min-h-screen bg-lime-900 text-white flex items-center justify-center font-sans">
            <div className="w-[90%] grid grid-cols-5 gap-1">
                {
                    displayedCards.map((card, index) => {
                        return (
                            <Card id={index} suit={card.icon} rank={card.rank} />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default TitleScreen;