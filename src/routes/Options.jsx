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
            <div className="w-[85%] xs:w-80%] sm:w-[75%] md:w-[70%] lg:w-[60%] xl:w-[50%] mt-[50dvh] pt-12 md:pt-16 flex items-center justify-center">
                <div className="w-full max-w-[90rem] flex flex-col items-center justify-center">
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
                    <BorderToggle />
                    <OptionChoice
                        type="background"
                        title="Card Border Color"
                        options={cardOutlineColors}
                    />
                    <OptionChoice
                        type="suits"
                        title="Suit Colors"
                        options={suitColors}
                    />
                </div>
            </div>
        </div>
    );
};

export default Options;
