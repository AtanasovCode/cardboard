import { useCardStore } from "../../useCardStore";
import Header from "../components/Header";

import BackgroundChoice from "../components/BackgroundChoice";
import Preview from "../components/Preview";

const Options = () => {
    const { changeCardBackground, changeBackgroundStyle } = useCardStore();

    return (
        <div className="min-h-[100dvh] flex flex-col items-center justify-start bg-main-background text-white">
            <Preview />
            <div className="w-[90%] lg:w-[70%] flex flex-col items-start justify-center flex-1 mt-12">
                <div className="w-full flex flex-col items-start justify-center mb-12">
                    <div className="w-full text-md font-semibold text-center mb-4 lg:text-left lg:font-bold">
                        Background Style
                    </div>
                    <div className="w-full grid grid-cols-3 md:grid-cols-6 gap-1">
                        <BackgroundChoice
                            name="Pool Table"
                            background="bg-pool-table"
                            handleClick={changeBackgroundStyle}
                        />
                        <BackgroundChoice
                            name="Poker Table"
                            background="bg-poker-table"
                            handleClick={changeBackgroundStyle}
                        />
                        <BackgroundChoice
                            name="Casino Night"
                            background="bg-casino-night"
                            handleClick={changeBackgroundStyle}
                        />
                        <BackgroundChoice
                            name="Green Gold"
                            background="bg-green-gold"
                            handleClick={changeBackgroundStyle}
                        />
                        <BackgroundChoice
                            name="Luxury Poker"
                            background="bg-luxury-poker"
                            handleClick={changeBackgroundStyle}
                        />
                        <BackgroundChoice
                            name="Dark Felt"
                            background="bg-dark-felt"
                            handleClick={changeBackgroundStyle}
                        />
                        <BackgroundChoice
                            name="Pure Black"
                            background="bg-slate-900"
                            handleClick={changeBackgroundStyle}
                        />
                        <BackgroundChoice
                            name="Pure Red"
                            background="bg-red-800"
                            handleClick={changeBackgroundStyle}
                        />
                        <BackgroundChoice
                            name="Pure Gray"
                            background="bg-slate-800"
                            handleClick={changeBackgroundStyle}
                        />
                    </div>
                </div>
                <div className="w-full flex flex-col items-start justify-center mb-12">
                    <div className="w-full text-md font-semibold text-center mb-4 lg:text-left lg:font-bold">
                        Card Background
                    </div>
                    <div className="w-full grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                        <BackgroundChoice
                            name="Black"
                            background="bg-card-black"
                            handleClick={changeCardBackground}
                        />
                        <BackgroundChoice
                            name="White"
                            background="bg-card-white"
                            handleClick={changeCardBackground}
                        />
                        <BackgroundChoice
                            name="Dark Grey"
                            background="bg-card-grey"
                            handleClick={changeCardBackground}
                        />
                        <BackgroundChoice
                            name="Red"
                            background="bg-card-red"
                            handleClick={changeCardBackground}
                        />
                        <BackgroundChoice
                            name="Blue"
                            background="bg-card-blue"
                            handleClick={changeCardBackground}
                        />
                        <BackgroundChoice
                            name="Green"
                            background="bg-card-green"
                            handleClick={changeCardBackground}
                        />
                    </div>
                </div>
                <div className="flex items-center justify-center mb-8">
                    <div className="w-full text-md font-semibold text-center mb-4 lg:text-left lg:font-bold">
                        Suit Style
                    </div>
                    <div className="w-full grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3"></div>
                </div>
            </div>
        </div>
    );
};

export default Options;
