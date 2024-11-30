



const MultiSuitCenter = ({ suit, rank }) => {
    return (
        <div
            className={`
                absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
                flex flex-col items-center justify-center gap-1
            `}
        >
            <div className="w-full flex items-center justify-center gap-1">
                <div className="w-[30%]">{suit}</div>
                <div className="w-[30%]">{suit}</div>
            </div>
            <div className="w-full flex items-center justify-center gap-1 rotate-[180deg]">
                <div className="w-[30%]">{suit}</div>
                <div className="w-[30%]">{suit}</div>
            </div>
        </div>
    );
};

export default MultiSuitCenter;
