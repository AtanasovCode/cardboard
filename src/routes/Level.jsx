import { useEffect } from "react";
import { useCardStore } from "../../useCardStore";

import Card from "../components/Card";

const Level = () => {

    const {
        displayedCards,
        generateUniqueRandomCards,
        cardsToDisplay,
        increaseCardsToDisplay,
        clickedCards,
        resetClickedCards,
    } = useCardStore();

    useEffect(() => {
        generateUniqueRandomCards(cardsToDisplay);
    }, [cardsToDisplay]);

    useEffect(() => {
        if(clickedCards.length === cardsToDisplay) {
            increaseCardsToDisplay(cardsToDisplay + 1);
            resetClickedCards();
        }

        console.log(clickedCards);
    }, [clickedCards, cardsToDisplay])

    return (
        <div className="min-h-screen bg-green-900 flex items-center justify-center">
            <div className="w-[90%] grid grid-cols-5 gap-1">
                {
                    displayedCards.map((card, index) => {
                        return (
                            <Card key={card.id} suit={card.icon} rank={card.rank} cardID={card.id} />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Level;