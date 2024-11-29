import ClassicCard from "../cards/ClassicCard";
import RankCard from "../cards/RankCard";

import HeartsSuit from "../suits/HeartsSuit";
import DiamondsSuit from "../suits/DiamondsSuit";

const CardChoice = () => {
    return (
        <div
            className={`w-full flex flex-col items-center justify-center
            transition-all duration-300 ease-in-out`}
        >
            <div className="w-full text-sm md:text-base mb-2 lg:mb-4 text-center sm:text-left">
                Card Style
            </div>
            <div className="w-full flex items-center justify-center gap-4">
                <ClassicCard
                    key="classic"
                    suit={<HeartsSuit color="#000000" />}
                    suitName={"hearts"}
                    rank="4"
                    cardID="classic"
                    backgroundColor="#FFFFFF"
                    size="w-[40%] xs:w-auto sm:h-[40dvh]"
                    hoverEffect="hover:cursor-pointer"
                    outline={false}
                    allowClick={false}
                />
                <RankCard
                    key="classic"
                    suit={<DiamondsSuit color="#000000" />}
                    rank="4"
                    cardID="classic"
                    backgroundColor="#FFFFFF"
                    size="w-[40%] xs:w-auto xs:h-[40dvh]"
                    hoverEffect="hover:cursor-pointer"
                    customColor={true}
                    outline={false}
                    allowClick={false}
                />
            </div>
        </div>
    );
}

export default CardChoice;