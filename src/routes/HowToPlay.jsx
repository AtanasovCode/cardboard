import {
    Strategy,
    ShuffleAngular,
    MouseLeftClick,
    HandTap,
    Trophy,
    DiceFive,
    FlagCheckered,
} from "@phosphor-icons/react";

import roundOne from '../assets/images/round-one-screenshot.png';
import moreCards from '../assets/images/more-cards.png';

import PlayDescription from "../components/PlayDescription";

const HowToPlay = () => {
    return (
        <div className="min-h-[100dvh] bg-main-background text-white flex items-center justify-center py-8">
            <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[65%] xl:w-[50%] xl:max-w-[100rem] flex flex-col items-center justify-center">
                <div className="w-full flex items-center justify-center gap-2 mb-12">
                    <div className="w-10 md:w-14 lg:w-16 flex items-center justify-center">
                        <Strategy size="100%" weight="fill" color="#FFF" />
                    </div>
                    <div className="font-bold text-xl md:text-2xl lg:text-3xl">
                        How To Play
                    </div>
                </div>
                <PlayDescription
                    icon={<DiceFive weight="fill" color="#FFF" size="100%" />}
                    iconMobile={null}
                    title="Randomized cards"
                    description="Each game starts with 3 unique, randomized playing cards. Every round, the cards are shuffled and increase in number, testing your memory skills."
                    image={roundOne}
                />
                <PlayDescription
                    icon={<MouseLeftClick size="100%" weight="fill" color="#FFF" />}
                    iconMobile={<HandTap size="100%" weight="fill" color="#FFF" />}
                    title="Click each card only once"
                    description="Your goal is to click on every card exactly once. Clicking on the same card twice ends the game, so focus and remember your choices!"
                    image={null}
                />
                <PlayDescription
                    icon={<FlagCheckered size="100%" weight="fill" color="#FFF" />}
                    title="Progress through rounds"
                    description="Complete a round by clicking all unique cards without repeating. Each new round introduces an additional card, challenging your memory as you advance."
                    image={moreCards}
                />
                <PlayDescription
                    icon={<Trophy size="100%" weight="fill" color="#FFF" />}
                    title="Beat your personal best"
                    description="Try to beat your personal best score and improve your memorization skills."
                    image={null}
                />
            </div>
        </div>
    );
}

export default HowToPlay;