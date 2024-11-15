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
        generateUnique
    } = useGameLogicStore();

    const menuTransition = mobileMenu ? "translate-x-0" : "translate-x-[100%]";

    return (
        <div className={`w-full h-[100dvh] z-[999] flex flex-col items-center justify-start
                fixed top-0 right-0 ${menuTransition} transition-all duration-500 ease-in-out bg-slate-800
                sm:w-[70%] md:w-[50%] lg:w-[30%] lg:max-w-[35rem]
        `}>
            <div className="w-full flex items-center justify-center relative mb-16 p-6">
                <div
                    className="absolute left-[5%] w-7 h-7 cursor-pointer"
                    onClick={() => toggleMobileMenu()}
                >
                    <X size="100%" weight="regular" fill="#FFF" />
                </div>
                <img src={logo} alt="logo" className="w-[65px] xs:w-[70px] md:w-[90px]" />
            </div>
            <div className="flex flex-col items-center justify-center w-full">
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