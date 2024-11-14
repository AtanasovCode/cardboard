import { useCardStore } from "../../useCardStore";
import { ArrowDown } from "@phosphor-icons/react";

import logo from '../assets/logo.svg';

import Hero from "../components/Hero";
import CustomCursor from "../components/CustomCursor";

import suitBlack from '../assets/suits\/clubs-black.svg';
import suitWhite from '../assets/suits/clubs-white.svg';

const TitleScreen = () => {
    return (
        <div className="min-h-[100dvh] bg-gradient-to-t from-green-900 to-green-600 text-white flex 
        flex-col items-center justify-start font-sans cursor-none">
            <CustomCursor />
            <div className="w-full flex items-center justify-between mb-2 px-4 py-2 lg:mb-0">
                <div className="flex items-center justify-center">
                    <img src={logo} alt="logo" className="w-[70px] lg:w-[95px]" />
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
            <Hero />
        </div>
    );
}

export default TitleScreen;