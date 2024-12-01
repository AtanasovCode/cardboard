import { useCardStore } from "../../useCardStore";
import { useGameLogicStore } from "../../useGameLogicStore";

import Preview from "../components/options/Preview";
import OptionChoice from "../components/options/OptionChoice";
import CardChoice from "../components/options/CardChoice";
import OptionToggle from "../components/options/OptionToggle";
import OptionDivide from "../components/options/OptionDivide";


const Options = () => {
    const {
        backgroundStyles,
        cardBackgrounds,
        cardOutlines,
        suitColors,
        isCardOutlineEnabled,
        toggleCardOutline,
        isOutlineGlowEnabled,
        toggleOutlineGlow,
    } = useCardStore();

    const {
        allowSound,
        toggleAllowSound,
    } = useGameLogicStore();

    return (
        <div className="min-h-[100dvh] flex flex-col items-center justify-start bg-main-background text-white">
            <Preview />
            <div className="w-[85%] sm:w-80%] md:w-[70%] xl:w-[55%] mt-[50dvh] lg:mt-[40dvh] flex items-center justify-center bg-main-background">
                <div className="w-full max-w-[90rem] flex flex-col items-center justify-center gap-12 lg:gap-10 bg-main-background py-12">

                    <OptionDivide title="General" />

                    <OptionToggle
                        type="sound"
                        title="Sounds"
                        handleClick={toggleAllowSound}
                        active={allowSound}
                    />

                    <OptionDivide title="Colors and Styles" />

                    <OptionChoice
                        type="background"
                        title="Table Style"
                        options={backgroundStyles()}
                    />
                    <CardChoice />
                    <OptionChoice
                        type="background"
                        title="Card Background"
                        options={cardBackgrounds()}
                    />
                    <OptionChoice
                        type="suits"
                        title="Suit Colors"
                        options={suitColors()}
                    />

                    <OptionDivide title="Card Border" />

                    <OptionToggle
                        type="border"
                        title="Card Border"
                        handleClick={toggleCardOutline}
                        active={isCardOutlineEnabled}
                    />
                    <OptionToggle
                        type="glow"
                        title="Border Glow"
                        handleClick={toggleOutlineGlow}
                        active={isOutlineGlowEnabled}
                    />
                    <OptionChoice
                        type="background"
                        title="Card Border Color"
                        options={cardOutlines()}
                    />
                </div>
            </div>
        </div>
    );
};

export default Options;
