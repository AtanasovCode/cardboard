import BackgroundChoice from "./BackgroundChoice";
import SuitChoice from "./SuitChoice";

const OptionChoice = ({
    type,
    title,
    options,
}) => {

    return (
        <div className="w-full flex flex-col md:flex-row items-center justify-between mb-12 md:mb-16 text-white">
            <div className="w-full md:w-auto text-left text-sm mb-4 md:mb-6">
                {title}
            </div>
            <div className="w-full md:w-auto flex items-center justify-end">
                {
                    type === "background" ?
                        options.map((option) => {
                            return (
                                <BackgroundChoice
                                    key={option.name}
                                    name={option.name}
                                    color={option.color}
                                    handleClick={option.handleClick}
                                />
                            );
                        })
                        :
                        options.map((option) => {
                            return (
                                <SuitChoice
                                    key={option.name}
                                    name={option.name}
                                    icon={option.icon}
                                    handleClick={option.handleClick}
                                />
                            );
                        })
                }
            </div>
        </div>
    );
}

export default OptionChoice;