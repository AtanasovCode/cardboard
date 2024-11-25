import { useCardStore } from "../../useCardStore";
import BackgroundChoice from "./BackgroundChoice";
import SuitChoice from "./SuitChoice";

const OptionChoice = ({ type, title, options }) => {
    const { backgroundStyle, cardBackground, cardOutlineColor, suitColor } = useCardStore();

    return (
        <div className="w-[90%] md:w-full flex flex-col md:flex-row items-center justify-between mb-12 md:mb-16">
            <div className="w-full md:w-auto text-left text-sm mb-4 md:mb-0">
                {title}
            </div>
            <div
                className={`
                    w-full md:w-auto grid gap-2 xs:flex xs:items-center xs:justify-center
                    ${type === "background" ? "grid-cols-6" : "grid-cols-4"}
                    place-items-center justify-items-center
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
                        const isSelected = suitColor === option.name;
                        return (
                            <SuitChoice
                                key={option.name}
                                isSelected={isSelected}
                                name={option.name}
                                color={option.name}
                                colors={option.colors}
                                handleClick={option.handleClick}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export default OptionChoice;
