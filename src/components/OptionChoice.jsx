import BackgroundChoice from "./BackgroundChoice";

const OptionChoice = ({
    title,
    options,
}) => {
    return (
        <div className="w-full flex flex-col md:flex-row items-center justify-between mb-12 text-white">
            <div className="w-full md:w-auto text-left text-sm mb-4 md:mb-0">
                {title}
            </div>
            <div className="w-full md:w-auto flex items-center justify-end">
                {
                    options.map((option) => {
                        return (
                            <BackgroundChoice 
                                name={option.name}
                                background={option.background}
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