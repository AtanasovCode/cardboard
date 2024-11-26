import { CheckCircle } from "@phosphor-icons/react";

const BackgroundChoice = ({ name, color, handleClick, isSelected }) => {

    const borderColor = isSelected ? "border-white" : "border-slate-500";

    return (
        <div
            className={`
                w-full aspect-square rounded-xl ${color}
                border-2 relative cursor-pointer
                ${borderColor}
            `}
            onClick={handleClick}
        >
            {isSelected && (
                <div className="absolute right-[2%] top-[2%] w-4 h-4">
                    <CheckCircle size="100%" weight="fill" color="#00ff00" />
                </div>
            )}
        </div>
    );
};

export default BackgroundChoice;
