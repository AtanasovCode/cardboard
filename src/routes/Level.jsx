import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCardStore } from "../../useCardStore";
import logo from '../assets/logo.svg';

import Card from "../components/Card";
import ScoreTracker from "../components/ScoreTracker";
import MobileMenu from '../components/MobileMenu';

const Level = () => {

    const navigate = useNavigate();

    const {
        displayedCards,
        generateUniqueRandomCards,
        cardsToDisplay,
        increaseCardsToDisplay,
        clickedCards,
        resetClickedCards,
        levelUp,
        cardBackground,
        gameOver,
    } = useCardStore();

    useEffect(() => {
        if(gameOver) {
            navigate("/game-over");
        } else {
            generateUniqueRandomCards(cardsToDisplay);
        }
    }, [gameOver, cardsToDisplay])

    useEffect(() => {
        if (clickedCards.length === cardsToDisplay) {
            increaseCardsToDisplay(cardsToDisplay + 1);
            levelUp();
            resetClickedCards();
        }
    }, [clickedCards, cardsToDisplay])

    const getCardBackground = (style) => {
        if(style === "black") return "bg-[#111]";
        else if(style === "white") return "bg-[#FFF]";
        else if(style === "red") return "bg-[#b80000]";
        else return "bg-[#38005d]"
    }

    return (
        <div className="min-h-[100dvh] bg-background text-white flex flex-col items-center justify-start font-sans relative">
            <ScoreTracker />
            <MobileMenu />
            <div className="w-[98%] md:w-[90%] max-w-[90rem] flex items-center justify-center flex-wrap">
                {
                    displayedCards.map((card, index) => {
                        return (
                            <Card 
                                key={card.id} 
                                suit={card.icon} 
                                rank={card.rank} 
                                cardID={card.id}
                                backgroundColor={getCardBackground(cardBackground)}
                                size="w-[150px] h-[225px] sm:w-[200px] sm:h-[300px]"
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Level;