import Header from "../components/Header";
import Hero from "../components/Hero";
import CustomCursor from "../components/CustomCursor";

const TitleScreen = () => {

    return (
        <div
            className={`
                min-h-dvh text-white bg-pool-table cursor-none
                font-sans flex flex-col items-center justify-center
            `}
        >
            <CustomCursor />
            <div className="w-[95%] min-h-dvh relative flex flex-col items-center justify-start max-w-[120rem]">
                <Header />
                <Hero />
                <div className="z-0 absolute bottom-0 left-0 opacity-40 w-full h-full md:opacity-100 md:bg-no-repeat md:w-[50%] md:h-[50%] bg-background-graphic bg-contain bg-center md:bg-left"></div>
            </div>
        </div>
    );
}

export default TitleScreen;