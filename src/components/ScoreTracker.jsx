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
        <div className="w-full flex items-center justify-between p-4 mb-6 bg-main-background border-b-2 border-slate-500">
            <div className="flex flex-col items-center justify-center">
                <div className="text-xl font-bold">
                    Score: {score}
                </div>
            </div>
            <div className="flex items-center justify-center w-[65px]">
                <img
                    src={logo}
                    alt="CardBoard Logo"
                    className="w-[100%]"
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