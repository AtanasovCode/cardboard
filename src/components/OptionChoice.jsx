import { useCardStore } from "../../useCardStore";
import BackgroundChoice from "./BackgroundChoice";
import SuitChoice from "./SuitChoice";

const OptionChoice = ({ type, title, options }) => {
    const { backgroundStyle, cardBackground, cardOutlineColor, suitStyle } = useCardStore();

    return (
        <div className="w-[98%] xs:w-[80%] sm:w-[75%] md:w-full flex flex-col md:flex-row items-center justify-between mb-12 md:mb-16">
            <div className="w-full md:w-auto text-left text-sm mb-4 md:mb-0">
                {title}
            </div>
            <div
                className={`
                    w-full md:w-auto grid gap-2 md:flex md:items-center md:justify-center
                    ${type === "background" ? "grid-cols-3" : "grid-cols-4"}
                `}
            >
                {type === "background"
                    ? options.map((option) => {
                        const isSelected = cardBackground === option.name
                            || backgroundStyle === option.name
                            || cardOutlineColor === option.name;

                        return (
                            <BackgroundChoice
                                key={option.name}
                                isSelected={isSelected}
                                name={option.name}
                                color={option.color}
                                handleClick={option.handleClick}
                            />
                        );
                    })
                    : options.map((option) => {
                        const isSelected = suitStyle === option.name; // Or whatever logic applies to "suits"
                        return (
                            <SuitChoice
                                key={option.name}
                                isSelected={isSelected}
                                name={option.name}
                                icon={option.icon}
                                handleClick={option.handleClick}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export default OptionChoice;
