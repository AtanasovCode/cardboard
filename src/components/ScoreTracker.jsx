import { useCardStore } from "../../useCardStore";
import logo from '../assets/logo.svg';

const ScoreTracker = () => {

    const {
        level,
        score,
    } = useCardStore();

    return (
        <div className="w-full flex items-center justify-between px-4 py-2 mb-6 bg-slate-950">
            <div className="flex-1 flex items-center justify-center">
                <img
                    src={logo}
                    alt="CardBoard Logo"
                    className="w-[75px] md:w-[90px]"
                />
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="text-xl md:text-3xl font-bold">
                    Score: {score}
                </div>
                <div className="text-xs text-slate-300">
                    Level: {level}
                </div>
            </div>
        </div>
    );
}

export default ScoreTracker;