import { useCardStore } from "../../useCardStore";

const MenuOption = ({
    optionName,
    icon,
    handleClick,
}) => {

    const { toggleMobileMenu } = useCardStore();

    return (
        <div
            className="w-full flex items-center justify-start cursor-pointer p-4 hover:bg-slate-700"
            onClick={() => {
                try {
                    handleClick?.(); // Safely call handleClick
                    toggleMobileMenu?.(); // Safely call toggleMobileMenu
                } catch (error) {
                    console.error("Error in MenuOption click handler:", error);
                }
            }}
        >
            <div className="flex items-center justify-center w-10 mr-4">
                {icon}
            </div>
            <div className="text-sm text-white text-left">
                {optionName}
            </div>
        </div >
    );
}

export default MenuOption;