import { ArrowDown } from "@phosphor-icons/react/dist/ssr";

import logo from '../assets/logo.svg';

const Header = () => {
    return (
        <div className="w-full flex items-center justify-between mb-2 px-4 py-2 lg:mb-0">
            <div className="flex items-center justify-center">
                <img src={logo} alt="logo" className="w-[70px] lg:w-[95px]" />
            </div>
            <div className="cursor-pointer flex items-center justify-center">
                <div className="text-sm">
                    Learn More
                </div>
                <div className="ml-2 w-4 animate-bounce">
                    <ArrowDown size="100%" weight="regular" fill="#FFF" />
                </div>
            </div>
        </div>
    );
}

export default Header;