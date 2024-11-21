import { useNavigate } from "react-router-dom";
import { useGameLogicStore } from "../../useGameLogicStore";
import Card from "./Card";

import { getCardBackground } from "../Utils";

import clubsBlack from '../assets/suits/clubs-black.svg';
import spadesBlack from '../assets/suits/spades-black.svg';


import { Play, Gear } from "@phosphor-icons/react";

const Hero = () => {

    const navigate = useNavigate();

    const { playClickSound } = useGameLogicStore();

    return (
        <div className="flex flex-col items-center justify-center w-[95%] sm:w-[85%] md:w-[75%] z-50">
            <div className="w-full flex flex-col items-center justify-center mb-10">
                <div className="font-black text-5xl mb-2 text-center xl:text-6xl">
                    Welcome to CardBoard
                </div>
                <div className="font-semibold text-base xl:text-xl">
                    The Ultimate Memory Challenge!
                </div>
            </div>
            <div className="w-full flex items-center justify-center">
                <div
                    className=""
                    onClick={() => {
                        playClickSound();
                        navigate("/play");
                    }}
                >
                    <Card
                        suit={spadesBlack}
                        rank="Play"
                        cardID="1"
                        backgroundColor={getCardBackground("white-card-background")}
                        size="w-[150px] sm:w-[200px] xl:w-[250px]"
                        hoverEffect="hover:scale-[1.05] transition-all duration-300 ease-in-out"
                        margin="m-2 md:m-6"
                        rankStyling="lg:font-black lg:text-xl"
                        suitSizes="lg:w-[30px] lg:h-[30px] xl:w-[35px] xl:h-[35px]"
                        allowClick={false}
                    />
                </div>
                <div
                    className=""
                    onClick={() => {
                        playClickSound();
                        navigate("/options");
                    }}
                >
                    <Card
                        suit={clubsBlack}
                        rank="Options"
                        cardID="1"
                        backgroundColor={getCardBackground("white-card-background")}
                        rankColor="text-[#000]"
                        size="w-[150px] sm:w-[200px] xl:w-[250px]"
                        hoverEffect="hover:scale-[1.05] transition-all duration-300 ease-in-out"
                        margin="m-2 md:m-6"
                        rankStyling="lg:font-black lg:text-xl"
                        suitSizes="lg:w-[30px] lg:h-[30px] xl:w-[35px] xl:h-[35px]"
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;