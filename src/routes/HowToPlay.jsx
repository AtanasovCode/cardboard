import { 
    Strategy,
    ShuffleAngular,
    MouseLeftClick,
    HandTap,
    Trophy,
} from "@phosphor-icons/react";

const HowToPlay = () => {
    return (
        <div className="min-h-[100dvh] bg-main-background text-white flex flex-col items-center justify-start py-8">
            <div className="flex items-center justify-center gap-2 mb-12">
                <div className="w-10 flex items-center justify-center">
                    <Strategy size="100%" weight="fill" color="#FFF" />
                </div>
                <div className="font-bold text-xl">
                    How To Play
                </div>
            </div>
        </div>
    );
}

export default HowToPlay;