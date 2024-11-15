import { useCardStore } from "../../useCardStore";

import logo from '../assets/logo.svg';

import Header from "../components/Header";
import Hero from "../components/Hero";
import CustomCursor from "../components/CustomCursor";

import suitBlack from '../assets/suits\/clubs-black.svg';
import suitWhite from '../assets/suits/clubs-white.svg';

const TitleScreen = () => {
    return (
        <div className="min-h-[100dvh] text-white bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-400 via-green-600 to-green-800
        font-sans cursor-none flex flex-col items-center justify-center">
            <div className="min-h-[100dvh] w-full relative flex-col items-center justify-start max-w-[2000px]">
                <CustomCursor />
                <Header />
                <div className="w-full flex items-center justify-center z-50">
                    <Hero />
                </div>
                <div className="z-10 absolute bottom-0 left-0 w-[100%] h-[30%] lg:h-[50%] bg-background-graphic bg-cover bg-center bg-no-repeat"></div>
            </div>
        </div>
    );
}

export default TitleScreen;