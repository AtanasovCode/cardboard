import { useCardStore } from '../../useCardStore';
import logo from '../assets/logo.svg';

import { X } from '@phosphor-icons/react';


const MobileMenu = () => {

    const { mobileMenu, toggleMobileMenu } = useCardStore();

    const menuTransition = mobileMenu ? "translate-x-0" : "translate-x-[100%]";

    return (
        <div className={`w-full h-[100dvh] z-[999] flex flex-col items-center justify-start
                fixed top-0 right-0 ${menuTransition} transition-all duration-500 ease-in-out bg-slate-800
                sm:w-[70%] md:w-[50%] lg:w-[30%] lg:max-w-[35rem]
        `}>
            <div className="w-full p-4  flex items-center justify-center relative bg-slate-950">
                <div 
                    className="absolute left-[5%] w-7 h-7"
                    onClick={() => toggleMobileMenu()}
                >
                    <X size="100%" weight="regular" fill="#FFF" />
                </div>
                <img src={logo} alt="logo" className="w-[65px] xs:w-[70px] md:w-[90px]" />
            </div>
        </div>
    );
}

export default MobileMenu;