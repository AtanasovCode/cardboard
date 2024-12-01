import { useNavigate } from "react-router-dom";
import { useGameLogicStore } from "../../useGameLogicStore";
import ClassicCard from "./cards/ClassicCard";
import { Strategy } from "@phosphor-icons/react";

import HeartsSuit from "./suits/HeartsSuit";
import DiamondsSuit from "./suits/DiamondsSuit";

import logo from '../assets/logo.svg';

const Hero = () => {

    const navigate = useNavigate();

    const { playClickSound } = useGameLogicStore();

    const cards = [
        {
            suit: <HeartsSuit color="#000" />,
            rank: "Play",
            id: "hearts-play",
            handleClick: () => {
                playClickSound();
                navigate("/play");
            },
        },
        {
            suit: <DiamondsSuit color="#000" />,
            rank: "Redesign",
            id: "clubs-play",
            handleClick: () => {
                playClickSound();
                navigate("/options");
            }
        },
    ];

    return (
        <div className="min-h-dvh w-dvw flex flex-col items-center justify-center z-50 gap-6 xl:bg-transparent xl:bg-opacity-100">
            <div className="w-full flex flex-col items-center justify-center">
                <div className="flex items-center justify-center gap-4">
                    <div className="w-20 xs:w-24 md:w-28 lg:w-32 flex items-center justify-center">
                        <img
                            src={logo}
                            alt="CardBoard logo"
                            className="w-full"
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1">
                        <div className="font-black text-4xl text-center xl:text-6xl">
                            CardBoard
                        </div>
                        <div className="text-xs font-medium text-slate-300 lg:text-base lg:text-slate-100">
                            The Ultimate Memory Challenge!
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex items-center justify-center gap-3 lg:gap-8">
                {
                    cards.map((card) => {
                        return (
                            <div
                                className="w-[40%] xs:w-auto xs:h-[45dvh]"
                                onClick={card.handleClick}
                            >
                                <ClassicCard
                                    key={card.id}
                                    suit={card.suit}
                                    rank={card.rank}
                                    cardID={card.id}
                                    backgroundColor={"#FFFFFF"}
                                    size="w-full xs:h-full xs:w-auto"
                                    hoverEffect="hover:scale-[1.04] transition-all duration-300 ease-in-out"
                                    outline={false}
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