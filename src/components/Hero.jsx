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
                navigate("/play");
            },
        },
        {
            suit: clubsBlack,
            rank: "Options",
            id: "clubs-play",
            handleClick: () => {
                playClickSound();
                navigate("/options");
            }
        },
    ];

    return (
        <div className="flex flex-col items-center justify-start z-50 flex-1 w-full pb-4">
            <div className="w-full flex flex-col items-center justify-center mb-4">
                <div className="font-black text-4xl mb-2 text-center xl:text-5xl">
                    CardBoard
                </div>
                <div className="font-semibold text-base xl:text-xl">
                    The Ultimate Memory Challenge!
                </div>
            </div>
            <div className="flex-1 w-full flex items-center justify-center gap-3 lg:gap-8">
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
                                    size="w-full xs:h-full xs:w-auto"
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