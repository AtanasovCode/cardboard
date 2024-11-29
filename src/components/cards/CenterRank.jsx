import { useCardStore } from "../../../useCardStore";

const CenterRank = ({ rank, suitName }) => {

    const { getSuitColor } = useCardStore();


    const color = getSuitColor(suitName);

    console.log(color);

    return (
        <div 
            className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-5xl font-black`}
            style={{ color: color }}
        >
            {rank}
        </div>
    );
}

export default CenterRank;