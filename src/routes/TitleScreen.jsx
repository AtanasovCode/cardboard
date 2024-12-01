import Hero from "../components/Hero";
import CustomCursor from "../components/CustomCursor";

import { Strategy } from "@phosphor-icons/react";

const TitleScreen = () => {

    return (
        <div
            className={`
                min-h-dvh w-full text-white bg-pool-table cursor-none
                font-sans flex flex-col items-center justify-center
            `}
        >
            <CustomCursor />
            <Hero />
            <div
                className="flex items-center justify-center absolute top-[4%] right-[4%] z-40"
                onClick={() => navigate("/how-to-play")}
            >
                <div
                    className="flex items-center justify-center motion-safe:animate-bounce"
                >
                    <div className="text-sm text-white">
                        How To Play
                    </div>
                    <div className="ml-2 w-8">
                        <Strategy size="100%" weight="fill" fill="#FFF" />
                    </div>
                </div>
            </div>
            <div className="z-0 absolute bottom-0 left-0 w-full h-full 
            bg-black bg-opacity-40 bg-background-graphic bg-contain bg-center lg:hidden"></div>
        </div>
    );
}

export default TitleScreen;