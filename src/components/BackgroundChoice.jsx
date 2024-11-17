import { CheckCircle } from "@phosphor-icons/react";
import { useCardStore } from "../../useCardStore";

const BackgroundChoice = ({
    name,
    background,
    handleClick,
}) => {

    const {
        backgroundStyle,
        cardBackground,
    } = useCardStore();

    const borderStyle = backgroundStyle === name || cardBackground === name ? "border-slate-50" : "border-slate-400";
    const textColor = name === "White" ? "text-black" : "text-white";

    return (
        <div className={`
            w-full aspect-square rounded-md ${background} mx-[1px] xs:mx-1
            border-2 ${borderStyle} relative cursor-pointer ${textColor}
            md:w-10 lg:w-16 xl:w-20
        `}
            onClick={handleClick}
        >
            {
                (cardBackground === name || backgroundStyle === name) &&
                <div className="absolute right-[2%] top-[2%] w-4 h-4">
                    <CheckCircle size="100%" weight="fill" color="#00ff00" />
                </div>
            }
        </div>
    );
}

export default BackgroundChoice;