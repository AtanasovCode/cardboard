import { useNavigate } from "react-router-dom";
import { useGameLogicStore } from "../../useGameLogicStore";
import { getCardBackground } from "../Utils";
import CustomCursor from "../components/CustomCursor";

import SpadesSuit from "../components/suits/SpadesSuit";
import DiamondsSuit from "../components/suits/DiamondsSuit";

import Card from "../components/Card";

const GameOver = () => {

    const navigate = useNavigate();

    const {
        resetEverything,
        score,
        personalBest,
        playClickSound,
    } = useGameLogicStore();

    const cards = [
        {
            suit: <DiamondsSuit color="#000" />,
            rank: "Restart",
            id: "hearts-play",
            handleClick: () => {
                playClickSound();
                resetEverything();
                navigate("/play");
            },
        },
        {
            suit: <SpadesSuit color="#000" />,
            rank: "Main Menu",
            id: "clubs-play",
            handleClick: () => {
                playClickSound();
                resetEverything();
                navigate("/");
            }
        },
    ];

    return (
        <div className="min-h-dvh w-full flex flex-col items-center justify-between bg-luxury-black text-white cursor-none py-10">
            <CustomCursor />
            <div className="z-0 absolute bottom-0 left-0 w-[100%] h-[35%] md:h-[50%] md:w-[100%] bg-background-graphic bg-contain bg-center md:bg-left bg-no-repeat"></div>
            <div className="w-full flex flex-col items-center justify-center">
                <div className="mb-6 lg:mb-10 font-bold text-4xl md:text-5xl lg:text-6xl lg:font-black">Game Over</div>
                <div className="font-bold text-base mb-2 md:text-lg lg:text-xl">Score: {score}</div>
                <div className="font-medium text-sm md:text-base lg:text-lg text-slate-200">Personal Best: {personalBest}</div>
            </div>
            <div className="w-dvw flex items-center justify-center flex-1 gap-3 lg:gap-8">
                {
                    cards.map((card) => {
                        return (
                            <div
                                className="w-[40%] xs:w-auto xs:h-[40dvh]"
                                onClick={card.handleClick}
                            >
                                <Card
                                    key={card.id}
                                    suit={card.suit}
                                    rank={card.rank}
                                    cardID={card.id}
                                    backgroundColor={getCardBackground("white-card-background")}
                                    size="w-full xs:w-auto xs:h-full"
                                    hoverEffect="hover:scale-[1.04] transition-all duration-300 ease-in-out"
                                    outline={null}
                                    allowClick={false}
                                />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default GameOver;