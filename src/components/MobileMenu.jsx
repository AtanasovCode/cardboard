import { useNavigate } from 'react-router-dom';
import { useCardStore } from '../../useCardStore';
import { useGameLogicStore } from '../../useGameLogicStore';
import logo from '../assets/logo.svg';

import { 
    ArrowsCounterClockwise, 
    GearSix,
    Gear, 
    Strategy, 
    X,
} from '@phosphor-icons/react';

import MenuOption from './MenuOption';


const MobileMenu = () => {

    const navigate = useNavigate();

    const {
        mobileMenu,
        toggleMobileMenu,
    } = useCardStore();

    const { 
        resetEverything,
        getCursorStyle,
    } = useGameLogicStore();

    const menuTransition = mobileMenu ? "translate-x-0" : "translate-x-[100%]";

    return (
        <div className={`w-full h-dvh z-[9999] flex flex-col items-center justify-start
                fixed top-0 right-0 ${menuTransition} transition-all duration-500 ease-in-out bg-main-background
                sm:w-[70%] md:w-[50%] lg:w-[30%] lg:max-w-[35rem] sm:border-l-2 border-slate-500
                sm:overflow-y-auto
        `}>
            <div className="w-full h-[15%] flex items-center justify-center relative p-4 pb-0">
                <div
                    className={`absolute left-[5%] w-7 h-7`}
                    style={{...getCursorStyle("hover")}}
                    onClick={() => toggleMobileMenu()}
                >
                    <X size="100%" weight="regular" fill="#FFF" />
                </div>
                <img src={logo} alt="logo" className="h-[90%]" />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center w-full">
                <MenuOption
                    optionName="Home"
                    icon={<img src={logo} alt="logo" className="w-full" />}
                    handleClick={() => navigate("/")}
                />
                <MenuOption
                    optionName="How To Play"
                    icon={<Strategy size="100%" weight="fill" color="#FFF" />}
                    handleClick={() => navigate("/how-to-play")}
                />
                <MenuOption
                    optionName="Options"
                    icon={<GearSix size="100%" weight="fill" color="#FFF" />}
                    handleClick={() => navigate("/options")}
                />
                <MenuOption
                    optionName="Restart"
                    icon={<ArrowsCounterClockwise size="100%" weight="fill" color="#FFF" />}
                    handleClick={() => resetEverything()} />
            </div>
        </div>
    );
}

export default MobileMenu;