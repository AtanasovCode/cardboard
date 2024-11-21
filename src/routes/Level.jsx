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
        getSuitStyle,
        backgroundStyle,
        cardOutline,
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
        if (gameOver) {
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
            <div className="w-[98%] mt-[15dvh] md:w-[90%] xl:w-[80%] max-w-[90rem] flex flex-1 items-center justify-center py-12 xl:py-14">
                <div className="w-full flex items-center justify-center flex-wrap gap-3 md:gap-4 xl:gap-5">
                    {
                        displayedCards.map((card, index) => {
                            return (
                                <Card
                                    key={card.id}
                                    suit={getSuitStyle(card.suit)}
                                    rank={card.rank}
                                    cardID={card.id}
                                    backgroundColor={getCardBackground(cardBackground)}
                                    size="w-[90px] xs:w-[100px] sm:w-[120px] md:w-[140px] xl:w-[160px]"
                                    centerSuitStyling="w-10 xs:w-16"
                                    suitStyling="w-[8px] xs:w-3 xl:w-4"
                                    margin="m-0"
                                    hoverEffect="hover:cursor-pointer"
                                    outline={cardOutline}
                                    allowClick={true}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Level;