import { useCardStore } from "../../../useCardStore";
import { useGameLogicStore } from "../../../useGameLogicStore";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";

import Card from "../Card";

const Preview = () => {

    const navigate = useNavigate();

    const {
        getSuit,
        getBackgroundStyle,
        getCardBackground,
    } = useCardStore();

    const { getCursorStyle } = useGameLogicStore();

    const cards = [
        { suit: "spades", rank: "A", cardID: "hearts-a" },
        { suit: "hearts", rank: "3", cardID: "spades-j" },
        { suit: "clubs", rank: "5", cardID: "clubs-7" },
        { suit: "diamonds", rank: "10", cardID: "diamonds-k" },
    ];

    return (
        <div
            className={`fixed top-0 left-0 w-full h-[50dvh] lg:h-[40dvh] z-[9999] flex items-center justify-center
            border-b-2 border-slate-500`}
            style={{ backgroundImage: getBackgroundStyle() }}
        >
            <div
                className={`absolute top-[5%] left-[5%] lg:left-[2%] w-6 lg:w-8`}
                style={{ ...getCursorStyle("hover") }}
                onClick={() => navigate("/")}
            >
                <ArrowLeft size="100%" weight="regular" color="#FFF" />
            </div>
            <div className="w-full flex items-center justify-center flex-1 flex-wrap gap-2 xl:gap-4">
                {
                    cards.map((card) => {
                        return (
                            <Card
                                key={card.id}
                                suit={getSuit(card.suit)}
                                suitName={card.suit}
                                rank={card.rank}
                                cardID={card.id}
                                backgroundColor={getCardBackground()}
                                size="w-[20%] xs:w-auto xs:h-[22dvh]"
                                outline={true}
                                allowGlow={true}
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