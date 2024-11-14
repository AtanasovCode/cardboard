import Card from "./Card";

import suitBlack from '../assets/suits/clubs-black.svg';

import { Play, Gear } from "@phosphor-icons/react";

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center w-[95%] sm:w-[85%] md:w-[70%] lg:w-[60%]">
            <div className="absolute bottom-0 left-0 w-[100%] h-[30%] lg:h-[50%] bg-background-graphic bg-cover bg-no-repeat"></div>
            <div className="w-full flex flex-col items-center justify-center mb-16">
                <div className="font-black text-5xl mb-2 text-center lg:text-6xl">
                    Welcome to CardBoard
                </div>
                <div className="font-semibold text-lg">
                    The Ultimate Memory Challenge!
                </div>
            </div>
            <div className="w-full flex items-center justify-center">
                <div className="">
                    <Card
                        suit={suitBlack}
                        rank="Play"
                        cardID="1"
                        backgroundColor="bg-[#FFFD82]"
                        rankColor="text-[#000]"
                        size="w-[150px] h-[225px] sm:w-[200px] sm:h-[300px] lg:w-[250px] lg:h-[375px] hover:scale-[1.05] transition-all duration-300 ease-in-out"
                        customStyling="lg:font-black lg:text-xl"
                        customSuitSizes="lg:w-[30px] lg:h-[30px]"
                    />
                </div>
                <div className="">
                    <Card
                        suit={suitBlack}
                        rank="Options"
                        cardID="1"
                        backgroundColor="bg-[#FFFD82]"
                        rankColor="text-[#000]"
                        size="w-[150px] h-[225px] sm:w-[200px] sm:h-[300px] lg:w-[250px] lg:h-[375px] hover:scale-[1.05] transition-all duration-300 ease-in-out"
                        customStyling="lg:font-black lg:text-xl"
                        customSuitSizes="lg:w-[30px] lg:h-[30px]"
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;