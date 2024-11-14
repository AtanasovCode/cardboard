import { useEffect } from "react";
import { useCardStore } from "../../useCardStore";
import logo from '../assets/logo.svg';

import Card from "../components/Card";
import ScoreTracker from "../components/ScoreTracker";

const Level = () => {

    const {
        displayedCards,
        generateUniqueRandomCards,
        cardsToDisplay,
        increaseCardsToDisplay,
        clickedCards,
        resetClickedCards,
        level, levelUp,
        score, increaseScore,
    } = useCardStore();

    useEffect(() => {
        generateUniqueRandomCards(cardsToDisplay);
    }, [cardsToDisplay]);

    useEffect(() => {
        if (clickedCards.length === cardsToDisplay) {
            increaseCardsToDisplay(cardsToDisplay + 1);
            levelUp();
            resetClickedCards();
        }
    }, [clickedCards, cardsToDisplay])

    return (
        <div className="min-h-[100dvh] bg-background text-white flex flex-col items-center justify-start font-sans">
            <ScoreTracker />
            <div className="w-[98%] md:w-[90%] max-w-[90rem] flex items-center justify-center flex-wrap">
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