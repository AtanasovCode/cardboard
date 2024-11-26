import { useCardStore } from "../../useCardStore";

import Preview from "../components/Preview";
import OptionChoice from "../components/OptionChoice";
import BorderToggle from "../components/BorderToggle";


const Options = () => {
    const {
        backgroundStyles,
        cardBackgrounds,
        cardOutlineColors,
        suitColors,
    } = useCardStore();

    return (
        <div className="min-h-[100dvh] flex flex-col items-center justify-start bg-main-background text-white">
            <Preview />
            <div className="w-[85%] sm:w-80%] md:w-[70%] xl:w-[50%] mt-[50dvh] lg:mt-[40dvh] flex items-center justify-center bg-main-background">
                <div className="w-full max-w-[90rem] flex flex-col items-center justify-center gap-12 lg:gap-10 bg-main-background py-12">
                    <OptionChoice
                        type="background"
                        title="Background Style"
                        options={backgroundStyles}
                    />
                    <OptionChoice
                        type="background"
                        title="Card Background"
                        options={cardBackgrounds}
                    />
                    <OptionChoice
                        type="suits"
                        title="Suit Colors"
                        options={suitColors}
                    />
                    <BorderToggle />
                    <OptionChoice
                        type="background"
                        title="Card Border Color"
                        options={cardOutlineColors}
                    />
                </div>
            </div>
        </div>
    );
};

export default Options;
