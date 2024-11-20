import { useCardStore } from "../../useCardStore";
import BackgroundChoice from "./BackgroundChoice";
import SuitChoice from "./SuitChoice";

const OptionChoice = ({ type, title, options }) => {
    const { backgroundStyle, cardBackground, cardOutlineColor, suitStyle } = useCardStore();

    return (
        <div className="w-full flex flex-col md:flex-row items-center justify-between mb-12 md:mb-16">
            <div className="w-full md:w-auto text-left text-sm mb-4 md:mb-6">
                {title}
            </div>
            <div className="w-full md:w-auto flex items-center justify-end">
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
