import Hero from "../components/Hero";
import { useGameLogicStore } from "../../useGameLogicStore";
import CustomCursor from "../components/CustomCursor";


const TitleScreen = () => {

    const { getCursorStyle } = useGameLogicStore();

    return (
        <div
            className={`
                min-h-dvh w-full text-white bg-pool-table
                font-sans flex flex-col items-center justify-center
            `}
            style={{...getCursorStyle()}}
        >
            <Hero />
            <div className="z-0 absolute bottom-0 left-0 w-full h-full 
            bg-background-graphic bg-black bg-opacity-40 bg-contain bg-center"></div>
        </div>
    );
}

export default TitleScreen;