

const CardRank = ({
    rank,
    suit,
    invert,
}) => {

    const invertStyling = invert && "rotate-[180deg]";

    return (
        <div className={`w-full flex flex-col items-start justify-center p-2 ${invertStyling}`}>
            <div className={`text-xs md:text-sm font-semibold mb-1`}>
                {rank}
            </div>
            <div className={`flex items-center justify-center w-[15%]`}>
                <img src={suit} className={`w-full`} />
            </div>
        </div>
    );
}

export default CardRank;