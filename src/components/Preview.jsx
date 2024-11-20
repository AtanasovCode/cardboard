import { useCardStore } from "../../useCardStore";
import { getCardBackground, getBackgroundStyle } from "../Utils";

import Card from "./Card";

import heartsBlack from '../assets/suits/hearts-black.svg';
import spadesBlack from '../assets/suits/spades-black.svg';
import diamondsBlack from '../assets/suits/diamonds-black.svg';
import clubsBlack from '../assets/suits/clubs-black.svg';

const Preview = () => {

    const {
        backgroundStyle,
        cardBackground,
        suitStyle,
        getSuitStyle,
        cardOutline,
    } = useCardStore();

    return (
        <div className={`fixed top-0 left-0 w-full h-[45dvh] z-[9999] ${getBackgroundStyle(backgroundStyle)} flex items-center justify-center
        border-b-2 border-slate-500`}>
            <div className="w-[95%] flex items-center justify-center flex-1 flex-wrap">
                <Card
                    suit={getSuitStyle("spades")}
                    rank="A"
                    cardID="hearts-a"
                    backgroundColor={getCardBackground(cardBackground)}
                    size="w-[75px] xs:w-[90px] md:w-[110px] xl:w-[125px] xl:w-[125px]"
                    margin="m-1 xs:m-2"
                    customStyling="text-[10px] xs:text-xs lg:text-sm xl:text-sm xs:font-regular"
                    customPadding="p-1 xs:p-2"
                    customSuitSizes="w-2 xs:w-3"
                    outline={cardOutline}
                    allowClick={false}
                />
                <Card
                    suit={getSuitStyle("hearts")}
                    rank="J"
                    cardID="spades-j"
                    backgroundColor={getCardBackground(cardBackground)}
                    size="w-[75px] xs:w-[90px] md:w-[110px] xl:w-[125px]"
                    margin="m-1 xs:m-2"
                    customStyling="text-[10px] xs:text-xs lg:text-sm xl:text-sm xs:font-regular"
                    customPadding="p-1 xs:p-2"
                    customSuitSizes="w-2 xs:w-3"
                    outline={cardOutline}
                    allowClick={false}
                />
                <Card
                    suit={getSuitStyle("clubs")}
                    rank="7"
                    cardID="clubs-7"
                    backgroundColor={getCardBackground(cardBackground)}
                    size="w-[75px] xs:w-[90px] md:w-[110px] xl:w-[125px] "
                    margin="m-1 xs:m-2"
                    rankStyling="text-[10px] xs:text-xs lg:text-sm xl:text-sm xs:font-regular"
                    customPadding="p-1 xs:p-2"
                    suitStyling="w-2 xs:w-3"
                    outline={cardOutline}
                    allowClick={false}
                />
                <Card
                    suit={getSuitStyle("diamonds")}
                    rank="K"
                    cardID="diamonds-k"
                    backgroundColor={getCardBackground(cardBackground)}
                    size="w-[75px] xs:w-[90px] md:w-[110px] xl:w-[125px] "
                    margin="m-1 xs:m-2"
                    rankStyling="text-[10px] xs:text-xs lg:text-sm xl:text-sm xs:font-regular"
                    customPadding="p-1 xs:p-2"
                    suitStyling="w-2 xs:w-3"
                    outline={cardOutline}
                    allowClick={false}
                />
            </div>
        </div>
    );
}

export default Preview;