

const CardRank = ({
    rank,
    suit,
    invert,
    size,
    rankColor,
    rankBold,
}) => {

    const invertStyling = invert && "rotate-[180deg]";

    return (
        <div className={`w-full flex flex-col items-start justify-center p-2 ${invertStyling}`}>
            <div className={`${rankBold ? "font-black text-lg" : "font-bold text-xs md:text-sm xl:text-base"} mb-1 ${rankColor}`}>
                {rank}
            </div>
            <div className={`flex items-center justify-center ${size}`}>
                {suit}
            </div>
        </div>
    );
}

export default CardRank;