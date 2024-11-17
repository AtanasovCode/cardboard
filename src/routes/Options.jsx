import { useCardStore } from "../../useCardStore";

import Preview from "../components/Preview";
import OptionChoice from "../components/OptionChoice";

const Options = () => {
    const {
        backgroundStyles,
        cardBackgrounds,
        suitStyles,
    } = useCardStore();

    return (
        <div className="min-h-[100dvh] flex flex-col items-center justify-start bg-main-background text-white">
            <Preview />
            <div className="w-[95%] xs:w-[90%] xl:w-[80%] max-w-[90rem] flex flex-col items-start justify-start flex-1 mt-12">
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
                    type="suit"
                    title="Suit Style"
                    options={suitStyles}
                />
            </div>
        </div>
    );
};

export default Options;
