import { useCardStore } from "../../useCardStore";
import { ArrowDown } from "@phosphor-icons/react";

import logo from '../assets/logo.svg';
import Card from "../components/Card";

import suitBlack from '../assets/suits\/clubs-black.svg';
import suitWhite from '../assets/suits/clubs-white.svg';

const TitleScreen = () => {
    return (
        <div className="min-h-[100dvh] bg-gradient-to-t from-green-900 to-green-600 text-white flex flex-col items-center justify-start font-sans">
            <div className="w-full flex items-center justify-between mb-2 px-4 py-2">
                <div className="flex items-center justify-center">
                    <img src={logo} alt="logo" className="w-[70px]" />
                </div>
                <div className="cursor-pointer flex items-center justify-center">
                    <div className="text-sm">
                        Learn More
                    </div>
                    <div className="ml-2 w-4 animate-bounce">
                        <ArrowDown size="100%" weight="regular" fill="#FFF" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-[95%]">
                <div className="w-full flex flex-col items-center justify-center mb-4">
                    <div className="font-black text-5xl mb-2 text-center">
                        Welcome to CardBoard
                    </div>
                    <div className="font-semibold text-lg">
                        The Ultimate Memory Challenge!
                    </div>
                </div>
                <div className="w-full flex items-center justify-evenly mb-6">
                    <Card
                        suit={suitBlack}
                        rank="C"
                        cardID="1"
                        backgroundColor="bg-[#FFFD82]"
                        rankColor="text-[#000]"
                        size="w-[150px] h-[225px] lg:w-[200px] lg:h-[300px]"
                    />
                    <Card
                        suit={suitWhite}
                        rank="B"
                        cardID="1"
                        backgroundColor="bg-[#131217]"
                        rankColor="text-[#FFF]"
                        size="w-[150px] h-[225px] lg:w-[200px] lg:h-[300px]"
                    />
                </div>
                <div className="flex flex-col items-center justify-center w-full">
                    <input
                        type="button"
                        value="Play"
                        className="w-full bg-[#FFFD82] text-black text-lg font-bold py-2 mb-4 rounded-xl"
                    />
                    <input
                        type="button"
                        value="Options"
                        className="w-full bg-slate-950 text-lg font-bold py-2 rounded-xl"
                    />
                </div>
            </div>
        </div>
    );
}

export default TitleScreen;