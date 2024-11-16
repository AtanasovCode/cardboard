import { useCardStore } from "../../useCardStore";
import Header from "../components/Header";
import Hero from "../components/Hero";
import CustomCursor from "../components/CustomCursor";

import { getBackgroundStyle } from "../Utils";

const TitleScreen = () => {

    const {
        backgroundStyle,
    } = useCardStore();

    return (
        <div className={`min-h-[100dvh] text-white bg-casino-night
                        font-sans cursor-none flex flex-col items-center justify-center`}>
            <div className="min-h-[100dvh] w-full relative flex-col items-center justify-start max-w-[2000px]">
                <CustomCursor />
                <Header />
                <div className="w-full flex items-center justify-center z-50">
                    <Hero />
                </div>
                <div className="z-10 absolute bottom-0 left-0 w-[100%] h-[35%] lg:h-[50%] lg:w-[50%] bg-background-graphic bg-contain bg-center lg:bg-left bg-no-repeat"></div>
            </div>
        </div>
    );
}

export default TitleScreen;