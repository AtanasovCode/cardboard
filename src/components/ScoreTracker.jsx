import { useCardStore } from "../../useCardStore";
import { useGameLogicStore } from "../../useGameLogicStore";
import logo from '../assets/logo.svg';

import { List } from "@phosphor-icons/react";

const ScoreTracker = () => {

    const {
        toggleMobileMenu,
    } = useCardStore();

    const {
        score,
        level,
    } = useGameLogicStore();

    return (
        <div className="w-full h-[15dvh] fixed top-0 left-0 flex items-center justify-between px-4 bg-main-background z-20 border-b-2 border-slate-500">
            <div className="flex flex-col items-center justify-center">
                <div className="text-lg font-medium">
                    Score: {score}
                </div>
            </div>
            <div className="flex items-center justify-center h-[70%]">
                <img
                    src={logo}
                    alt="CardBoard Logo"
                    className="h-full"
                />
            </div>
            <div
                className="flex items-center justify-cetner w-8 md:w-10 lg:cursor-pointer"
                onClick={() => toggleMobileMenu()}
            >
                <List
                    size="100%"
                    weight="regular"
                    fill="#FFF"
                />
            </div>
        </div>
    );
}

export default ScoreTracker;