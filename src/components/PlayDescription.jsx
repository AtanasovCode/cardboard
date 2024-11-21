

const PlayDescription = ({
    title,
    icon,
    iconMobile,
    description,
    image,
}) => {

    const showIcon = iconMobile ? "hidden" : "flex";

    return (
        <div className="w-full flex flex-col items-center justify-center mb-12">
            <div className="w-full flex items-center justify-start gap-2 mb-4">
                <div className={`${showIcon} lg:flex items-center justify-center w-10 md:w-12 lg:w-14`}>
                    {icon}
                </div>
                {
                    iconMobile && <div className={`lg:hidden flex items-center justify-center w-10`}>
                        {iconMobile}
                    </div>
                }
                <div className="text-lg font-semibold md:text-xl lg:text-xl">
                    {title}
                </div>
            </div>
            <div className="text-sm text-slate-300 text-left w-full">
                {description}
            </div>
            {
                image &&
                <div className="w-full flex items-center justify-center mt-6">
                    <img src={image} alt="descriptive image" className="w-full" />
                </div>
            }
        </div>
    );
}

export default PlayDescription;