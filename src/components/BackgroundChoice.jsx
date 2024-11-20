import { CheckCircle } from "@phosphor-icons/react";
import { useCardStore } from "../../useCardStore";

const BackgroundChoice = ({
    name,
    color,
    handleClick,
}) => {

    const {
        backgroundStyle,
        cardBackground,
        cardOutlineColor,
    } = useCardStore();

    const borderStyle =
        backgroundStyle.toLowerCase() === name.toLowerCase() ||
            cardBackground.toLowerCase() === name.toLowerCase() ||
            cardOutlineColor.toLowerCase() === name.toLowerCase()
            ? "border-white"
            : "border-slate-500";

    const textColor = name === "White" ? "text-black" : "text-white";

    console.log(`Currently Selected Color: ${name}`)

    console.log(color);

    return (
        <div className={`
            w-full aspect-square rounded-md ${color} mx-[3px] xs:mx-1
            border-2 ${borderStyle} relative cursor-pointer ${textColor}
            md:w-10 lg:w-14 xl:w-16
        `}
            onClick={handleClick}
        >
            {
                (cardBackground === name || backgroundStyle === name || cardOutlineColor === name) &&
                <div className="absolute right-[2%] top-[2%] w-4 h-4">
                    <CheckCircle size="100%" weight="fill" color="#00ff00" />
                </div>
            }
        </div>
    );
}

export default BackgroundChoice;