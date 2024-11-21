import { useNavigate } from "react-router-dom";
import { useGameLogicStore } from "../../useGameLogicStore";
import { getCardBackground } from "../Utils";
import CustomCursor from "../components/CustomCursor";

import clubsBlack from '../assets/suits/clubs-black.svg';
import heartsBlack from '../assets/suits/hearts-black.svg';

import Card from "../components/Card";

const GameOver = () => {

    const navigate = useNavigate();

    const {
        resetEverything,
        score,
        personalBest,
        playClickSound,
    } = useGameLogicStore();

    return (
        <div className="min-h-[100dvh] w-full flex flex-col items-center justify-center bg-luxury-black text-white cursor-none">
            <CustomCursor />
            <div className="z-0 absolute bottom-0 left-0 w-[100%] h-[35%] lg:h-[50%] lg:w-[50%] bg-background-graphic bg-contain bg-center lg:bg-left bg-no-repeat"></div>
            <div className="font-bold text-4xl">Game Over</div>
            <div className="font-bold text-xl">Personal Best: {personalBest}</div>
            <div className="font-semibold text-md text-slate-300">Your Score: {score}</div>
            <div className="flex items-center justify-center">
                <div
                    className="flex items-center justify-center"
                    onClick={() => {
                        playClickSound();
                        resetEverything();
                        navigate("/play");
                    }}
                >
                    <Card
                        suit={clubsBlack}
                        rank="Restart"
                        cardID="1"
                        backgroundColor={getCardBackground("white-card-background")}
                        rankColor="text-[#000]"
                        size="w-[150px] sm:w-[200px] xl:w-[250px]"
                        hoverEffect="hover:scale-[1.05] transition-all duration-300 ease-in-out"
                        margin="m-3 md:m-6"
                        rankStyling="lg:font-black lg:text-xl"
                        suitSizes="lg:w-[30px] lg:h-[30px] xl:w-[35px] xl:h-[35px]"
                        allowClick={false}
                    />
                </div>
                <div
                    className="flex items-center justify-center"
                    onClick={() => {
                        playClickSound();
                        resetEverything();
                        navigate("/");
                    }}
                >
                    <Card
                        suit={heartsBlack}
                        rank="Main Menu"
                        cardID="2"
                        backgroundColor={getCardBackground("white-card-background")}
                        rankColor="text-[#000]"
                        size="w-[150px] sm:w-[200px] xl:w-[250px]"
                        hoverEffect="hover:scale-[1.05] transition-all duration-300 ease-in-out"
                        margin="m-3 md:m-6"
                        rankStyling="lg:font-black lg:text-xl"
                        suitSizes="lg:w-[30px] lg:h-[30px] xl:w-[35px] xl:h-[35px]"
                        allowClick={false}
                    />
                </div>
            </div>
        </div>
    );
}

export default GameOver;