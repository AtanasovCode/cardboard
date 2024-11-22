import { useCardStore } from "../../useCardStore";
import { useNavigate } from "react-router-dom";
import { getCardBackground, getBackgroundStyle } from "../Utils";
import { ArrowLeft } from "@phosphor-icons/react";

import Card from "./Card";

const Preview = () => {

    const navigate = useNavigate();

    const {
        backgroundStyle,
        cardBackground,
        suitStyle,
        getSuitStyle,
        cardOutline,
    } = useCardStore();

    const cards = [
        { suit: "spades", rank: "A", cardID: "hearts-a" },
        { suit: "hearts", rank: "J", cardID: "spades-j" },
        { suit: "clubs", rank: "7", cardID: "clubs-7" },
        { suit: "diamonds", rank: "K", cardID: "diamonds-k" },
    ];

    return (
        <div className={`fixed top-0 left-0 w-full h-[50dvh] z-[9999] ${getBackgroundStyle(backgroundStyle)} flex items-center justify-center
        border-b-2 border-slate-500`}>
            <div
                className="absolute top-[5%] left-[5%] lg:left-[2%] w-6 lg:w-8 cursor-pointer"
                onClick={() => navigate("/")}
            >
                <ArrowLeft size="100%" weight="regular" color="#FFF" />
            </div>
            <div className="w-[98%] flex items-center justify-center flex-1 flex-wrap gap-2 md:gap-3 lg:gap-4">
                {
                    cards.map((card) => {
                        return (
                            <Card
                                suit={getSuitStyle(card.suit)}
                                rank={card.rank}
                                cardID={card.id}
                                backgroundColor={getCardBackground(cardBackground)}
                                size="w-[20%] xs:w-auto xs:h-[25dvh] md:h-[30dvh]"
                                outline={cardOutline}
                                allowClick={false}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Preview;