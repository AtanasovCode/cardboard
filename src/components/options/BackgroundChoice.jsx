import { useGameLogicStore } from "../../../useGameLogicStore";
import DisplayActiveCheckmark from "../DisplayActiveCheckmark";

const BackgroundChoice = ({ name, color, handleClick, isSelected }) => {

    const { getCursorStyle } = useGameLogicStore();

    const borderColor = isSelected ? "border-active" : "border-inactive";

    return (
        <div
            className={`
                w-full aspect-square rounded-xl
                border-2 relative
                ${borderColor} ${getCursorStyle("hover")}
            `}
            style={{backgroundColor: color, backgroundImage: color}}
            onClick={handleClick}
        >
            {isSelected && <DisplayActiveCheckmark />}
        </div>
    );
};

export default BackgroundChoice;
