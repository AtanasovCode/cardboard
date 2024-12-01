import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import CustomCursor from "../components/CustomCursor";

import { Strategy } from "@phosphor-icons/react";

const TitleScreen = () => {

    const navigate = useNavigate();

    return (
        <div
            className={`
                min-h-dvh w-full text-white bg-pool-table cursor-none
                font-sans flex flex-col items-center justify-center
            `}
        >
            <CustomCursor />
            <Hero />
            <div className="z-0 absolute bottom-0 left-0 w-full h-full 
            bg-black bg-opacity-40 bg-background-graphic bg-contain bg-center lg:hidden"></div>
        </div>
    );
}

export default TitleScreen;