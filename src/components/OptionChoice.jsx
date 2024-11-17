import BackgroundChoice from "./BackgroundChoice";
import SuitChoice from "./SuitChoice";

const OptionChoice = ({
    type,
    title,
    options,
}) => {

    return (
        <div className="w-full flex flex-col md:flex-row items-center justify-between mb-4 md:mb-6 lg:mb-8 text-white">
            <div className="w-full md:w-auto text-left text-sm mb-4 md:mb-6">
                {title}
            </div>
            <div className="w-full md:w-auto flex items-center justify-end">
                {
                    type === "background" ?
                        options.map((option) => {
                            return (
                                <BackgroundChoice
                                    name={option.name}
                                    background={option.background}
                                    handleClick={option.handleClick}
                                />
                            );
                        })
                        :
                        options.map((option) => {
                            return (
                                <SuitChoice
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