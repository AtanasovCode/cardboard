

const MenuOption = ({
    optionName,
    icon,
    handleClick,
}) => {
    return (
        <div 
            className="w-full flex items-center justify-start mb-8"
            onClick={handleClick}
        >
            <div className="flex items-center justify-center w-10 mr-4">
                {icon}
            </div>
            <div className="text-sm text-white text-left">
                {optionName}
            </div>
        </div>
    );
}

export default MenuOption;