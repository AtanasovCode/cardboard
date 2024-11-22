import { useNavigate } from "react-router-dom";
import { useGameLogicStore } from "../../useGameLogicStore";
import Card from "./Card";

import { getCardBackground } from "../Utils";

import clubsBlack from '../assets/suits/clubs-black.svg';
import heartsBlack from '../assets/suits/hearts-black.svg';

const Hero = () => {

    const navigate = useNavigate();

    const { playClickSound } = useGameLogicStore();

    const cards = [
        {
            suit: heartsBlack,
            rank: "Play",
            id: "hearts-play",
            handleClick: () => {
                playClickSound();
                navigate("/options");
            },
        },
        {
            suit: clubsBlack,
            rank: "Options",
            id: "clubs-play",
            handleClick: () => {
                playClickSound();
                navigate("/play");
            }
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center z-50 w-full h-full">
            <div className="w-full flex flex-col items-center justify-center mb-10">
                <div className="font-black text-5xl mb-2 text-center xl:text-6xl">
                    CardBoard
                </div>
                <div className="font-semibold text-base xl:text-xl">
                    The Ultimate Memory Challenge!
                </div>
            </div>
            <div className="w-full h-full flex items-center justify-center gap-3 lg:gap-8">
                {
                    cards.map((card) => {
                        return (
                            <div
                                className="w-[40%] xs:w-auto xs:h-[45dvh]"
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

export default Hero;