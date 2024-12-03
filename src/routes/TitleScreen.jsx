import Hero from "../components/Hero";
import { useGameLogicStore } from "../../useGameLogicStore";
import CustomCursor from "../components/CustomCursor";


const TitleScreen = () => {

    const { getCursorStyle } = useGameLogicStore();

    return (
        <div
            className={`
                ${getCursorStyle()} min-h-dvh w-full text-white bg-pool-table
                font-sans flex flex-col items-center justify-center
            `}
        >
            <Hero />
            <div className="z-0 absolute bottom-0 left-0 w-full h-full 
            bg-black bg-opacity-40 bg-background-graphic bg-contain bg-center lg:hidden"></div>
        </div>
    );
}

export default TitleScreen;