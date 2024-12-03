import { useGameLogicStore } from "../../../useGameLogicStore";
import DisplayActiveCheckmark from "../DisplayActiveCheckmark";

const SuitChoice = ({
    name,
    handleClick,
    color,
    colors,
    isSelected,
    idx,
}) => {

    const { getCursorStyle } = useGameLogicStore();

    const borderStyle = isSelected ? "border-active" : "border-inactive";

    return (
        <div
            className={`
                w-full aspect-square rounded-xl
                border-2 ${borderStyle} relative
                grid grid-cols-2 overflow-hidden
            `}
            style={{ ...getCursorStyle("hover") }}
            onClick={() => {
                handleClick();
                console.log(`Clicked: ${color}`)
            }}
        >
            <div
                className={`w-full aspect-square`}
                style={{ backgroundColor: colors['hearts'] }}
            ></div>
            <div
                className={`w-full aspect-square`}
                style={{ backgroundColor: colors['spades'] }}
            ></div>
            <div
                className={`w-full aspect-square`}
                style={{ backgroundColor: colors['clubs'] }}
            ></div>
            <div
                className={`w-full aspect-square`}
                style={{ backgroundColor: colors['diamonds'] }}
            ></div>

            {isSelected && <DisplayActiveCheckmark />}
        </div>
    );
}

export default SuitChoice;