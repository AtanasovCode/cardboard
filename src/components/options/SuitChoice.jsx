import DisplayActiveCheckmark from "../DisplayActiveCheckmark";

const SuitChoice = ({
    name,
    handleClick,
    color,
    colors,
    isSelected,
    idx,
}) => {

    const borderStyle = isSelected ? "border-white" : "border-slate-500";

    return (
        <div className={`
            w-full aspect-square rounded-xl
            border-2 ${borderStyle} relative cursor-pointer
            grid grid-cols-2 overflow-hidden
        `}
            onClick={handleClick}
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