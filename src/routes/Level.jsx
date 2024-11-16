import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCardStore } from "../../useCardStore";
import { useGameLogicStore } from "../../useGameLogicStore";

import { getBackgroundStyle, getCardBackground } from "../Utils";

import Card from "../components/Card";
import ScoreTracker from "../components/ScoreTracker";
import MobileMenu from '../components/MobileMenu';

const Level = () => {

    const navigate = useNavigate();

    const {
        cardBackground,
        backgroundStyle,
    } = useCardStore();

    const { 
        gameOver,
        generateUniqueRandomCards,
        cardsToDisplay,
        displayedCards,
        clickedCards,
        updateDisplayedCards,
     } = useGameLogicStore();

    useEffect(() => {
        if(gameOver) {
            navigate("/game-over");
        } else {
            generateUniqueRandomCards(cardsToDisplay);
        }
    }, [gameOver])

    useEffect(() => {
        updateDisplayedCards();
    }, [clickedCards])

    return (
        <div className={`min-h-[100dvh] ${getBackgroundStyle(backgroundStyle)} text-white flex flex-col items-center justify-start font-sans relative`}>
            <ScoreTracker />
            <MobileMenu />
            <div className="w-[98%] md:w-[90%] max-w-[90rem] flex items-center justify-center flex-wrap flex-1">
                {
                    displayedCards.map((card, index) => {
                        return (
                            <Card 
                                key={card.id} 
                                suit={card.icon} 
                                rank={card.rank} 
                                cardID={card.id}
                                backgroundColor={getCardBackground(cardBackground)}
                                size="w-[90px] h-[135px] xs:w-[100px] xs:h-[150px] sm:w-[120px] sm:h-[180px] md:w-[140px] md:h-[210px] xl:w-[160px] xl:h-[240px]"
                                allowClick={true}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Level;