import { useCardStore } from "../../../useCardStore";
import { useGameLogicStore } from "../../../useGameLogicStore";
import ClassicCard from "../cards/ClassicCard";
import RankCard from "../cards/RankCard";
import MultiSuitCard from "../cards/MultiSuitCard";

import HeartsSuit from "../suits/HeartsSuit";

const CardChoice = () => {

    const {
        changeCardType,
    } = useCardStore();

    const { getCursorStyle } = useGameLogicStore();

    return (
        <div
            className={`w-full flex flex-col items-center justify-center
            transition-all duration-300 ease-in-out`}
        >
            <div className="w-full text-sm md:text-base mb-2 lg:mb-4 text-center sm:text-left">
                Card Style
            </div>
            <div className="w-full flex items-center justify-center gap-4">
                <div
                    className={`w-[30%] xs:w-auto xs:h-[30dvh]`}
                    style={{ ...getCursorStyle("hover") }}
                    onClick={() => changeCardType("classic")}
                >
                    <ClassicCard
                        key="classic"
                        suit={<HeartsSuit color="#000000" />}
                        suitName={"hearts"}
                        rank="10"
                        cardID="classic"
                        backgroundColor="#FFFFFF"
                        size="w-full xs:w-auto xs:h-full"
                        outline={false}
                        allowClick={false}
                    />
                </div>
                <div
                    className={`w-[30%] xs:w-auto xs:h-[30dvh]`}
                    style={{ ...getCursorStyle("hover") }}
                    onClick={() => changeCardType("bold")}
                >
                    <RankCard
                        key="classic"
                        suit={<HeartsSuit color="#000000" />}
                        rank="10"
                        cardID="classic"
                        backgroundColor="#FFFFFF"
                        size="w-full xs:w-auto xs:h-full"
                        customColor={true}
                        outline={false}
                        allowClick={false}
                    />
                </div>
                <div
                    className={`w-[30%] xs:w-auto xs:h-[30dvh]`}
                    style={{ ...getCursorStyle("hover") }}
                    onClick={() => changeCardType("multi-suit")}
                >
                    <MultiSuitCard
                        key="classic"
                        suit={<HeartsSuit color="#000000" />}
                        rank="10"
                        cardID="classic"
                        backgroundColor="#FFFFFF"
                        size="w-full xs:w-auto xs:h-full"
                        customColor={true}
                        outline={false}
                        allowClick={false}
                    />
                </div>
            </div>
        </div>
    );
}

export default CardChoice;