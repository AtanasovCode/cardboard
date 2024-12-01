import DisplayActiveCheckmark from "../DisplayActiveCheckmark";

const BackgroundChoice = ({ name, color, handleClick, isSelected }) => {

    const borderColor = isSelected ? "border-active" : "border-inactive";

    return (
        <div
            className={`
                w-full aspect-square rounded-xl
                border-2 relative cursor-pointer
                ${borderColor}
            `}
            style={{backgroundColor: color, backgroundImage: color}}
            onClick={handleClick}
        >
            {isSelected && <DisplayActiveCheckmark />}
        </div>
    );
};

export default BackgroundChoice;
