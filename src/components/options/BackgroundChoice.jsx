import { CheckCircle } from "@phosphor-icons/react";
import DisplayActiveCheckmark from "./DisplayActiveCheckmark";

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
            {isSelected && <DisplayActiveCheckmark />}
        </div>
    );
};

export default BackgroundChoice;
