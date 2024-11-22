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
            <div className="w-[95%] min-h-[100dvh] relative flex flex-col items-center justify-start max-w-[120rem]">
                <Header />
                <Hero />
                <div className="z-0 absolute bottom-0 left-0 w-[100%] h-[50%] lg:h-[60%] lg:w-[100%] bg-background-graphic bg-contain bg-left bg-no-repeat"></div>
            </div>
        </div>
    );
}

export default TitleScreen;