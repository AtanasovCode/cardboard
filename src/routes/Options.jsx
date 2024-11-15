import { useCardStore } from "../../useCardStore";
import Header from "../components/Header";

import BackgroundChoice from "../components/BackgroundChoice";

const Options = () => {
    const { options } = useCardStore();

    return (
        <div className="min-h-[100dvh] flex flex-col items-center justify-start bg-main-background text-white">
            <Header />
            <div className="w-[90%] lg:w-[70%] flex flex-col items-start justify-center flex-1">
                <div className="w-full flex flex-col items-start justify-center mb-12">
                    <div className="w-full text-md font-semibold text-center mb-4 lg:text-left lg:font-bold">
                        Background Style
                    </div>
                    <div className="w-full grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                        <BackgroundChoice
                            name="Pool Table"
                            background="bg-pool-table"
                        />
                        <BackgroundChoice
                            name="Poker Table"
                            background="bg-poker-table"
                        />
                        <BackgroundChoice
                            name="Casino Night"
                            background="bg-casino-night"
                        />
                        <BackgroundChoice
                            name="Luxury Poker"
                            background="bg-luxury-poker"
                        />
                        <BackgroundChoice
                            name="Green Gold"
                            background="bg-green-gold"
                        />
                        <BackgroundChoice
                            name="Dark Felt"
                            background="bg-dark-felt"
                        />
                    </div>
                </div>
                <div className="flex items-center justify-center mb-8">
                    <div className="text-sm text-left mr-4">
                        Card Color
                    </div>
                    <div className="grid grid-cols-2 justify-items-center"></div>
                </div>
                <div className="flex items-center justify-center mb-8">
                    <div className="text-sm text-left mr-4">
                        Suit Style
                    </div>
                    <div className="grid grid-cols-2 justify-items-center"></div>
                </div>
            </div>
        </div>
    );
};

export default Options;
