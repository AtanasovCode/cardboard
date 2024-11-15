import { CheckCircle } from "@phosphor-icons/react";
import { useCardStore } from "../../useCardStore";

const BackgroundChoice = ({
    name,
    background,
}) => {

    const {
        backgroundStyle,
        changeBackgroundStyle,
    } = useCardStore();

    const borderStyle = backgroundStyle === name ? "border-slate-200" : "border-slate-400"

    return (
        <div className={`
            w-full h-32 px-4 py-2 rounded-md flex items-end justify-center ${background}
            border-2 ${borderStyle} relative cursor-pointer
        `}
        onClick={() => changeBackgroundStyle(name)}
        >
            <div className="text-xs">
                {name}
            </div>
            {
                backgroundStyle === name &&
                <div className="absolute right-[2%]">
                    <CheckCircle size={24} weight="fill" color="#00ff00" />
                </div>
            }
        </div>
    );
}

export default BackgroundChoice;