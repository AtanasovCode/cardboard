import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCardStore } from "../../useCardStore";
import { useGameLogicStore } from "../../useGameLogicStore";

import Card from '../components/Card';
import ScoreTracker from "../components/ScoreTracker";
import MobileMenu from '../components/MobileMenu';

const Level = () => {

    const navigate = useNavigate();

    const {
        getSuit,
        getBackgroundStyle,
        getCardBackground,
    } = useCardStore();

    const {
        gameOver,
        generateUniqueRandomCards,
        cardsToDisplay,
        displayedCards,
        clickedCards,
        updateDisplayedCards,
        getCursorStyle,
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
        <div 
            className={`min-h-[100dvh] text-white flex flex-col items-center justify-start font-sans relative ${getCursorStyle()}`}
            style={{ backgroundImage: getBackgroundStyle(), }}
        >
            <ScoreTracker />
            <MobileMenu />
            <div className="w-[98%] mt-[15dvh] md:w-[90%] xl:w-[80%] max-w-[90rem] flex flex-1 items-center justify-center py-12 xl:py-14">
                <div className="w-full flex items-center justify-center flex-wrap gap-x-2 gap-y-4 md:gap-x-3 xl:gap-x-4">
                    {
                        displayedCards.map((card, index) => {
                            return (
                                <Card
                                    key={card.id}
                                    suit={getSuit(card.suit)}
                                    suitName={card.suit}
                                    rank={card.rank}
                                    cardID={card.id}
                                    backgroundColor={getCardBackground()}
                                    size="w-[23%] xs:w-[20%] sm:w-[18%] md:w-[14%] lg:w-[12%] xl:w-[11%]"
                                    hoverEffect={`${getCursorStyle("hover")}`}
                                    outline={true}
                                    allowGlow={true}
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