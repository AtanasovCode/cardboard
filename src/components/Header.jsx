import { useNavigate } from "react-router-dom";
import { ArrowDown, Strategy } from "@phosphor-icons/react/dist/ssr";

import logo from '../assets/logo.svg';

const Header = () => {

    const navigate = useNavigate();

    return (
        <div className="w-full flex items-stretch justify-between mb-2 px-4 py-2 lg:mb-0 lg:px-12 lg:py-4">
            <div className="flex items-center justify-center" onClick={() => navigate("/")}>
                <img src={logo} alt="logo" className="w-[70px] lg:w-[95px]" />
            </div>
            <div 
                className="flex items-center justify-center"
                onClick={() => navigate("/how-to-play")}
            >
                <div
                    className="flex items-center justify-center motion-safe:animate-bounce"
                >
                    <div className="text-sm text-white">
                        How To Play
                    </div>
                    <div className="ml-2 w-8">
                        <Strategy size="100%" weight="fill" fill="#FFF" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;