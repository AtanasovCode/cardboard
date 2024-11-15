import { useNavigate } from "react-router-dom";
import { useGameLogicStore } from "../../useGameLogicStore";

const GameOver = () => {

    const navigate = useNavigate();

    const { resetEverything } = useGameLogicStore();

    return (
        <div className="min-h-[100dvh] w-full flex items-center justify-center bg-gradient-red text-white">
            <div className="font-bold text-4xl">Game Over</div>
            <input 
                type="button"
                value="Restart"
                onClick={() => {
                    resetEverything();
                    navigate("/play");
                }}
                className="p-6 text-center text-white bg-green-700"
            />
        </div>
    );
}

export default GameOver;