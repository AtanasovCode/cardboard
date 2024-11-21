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

    return (
        <div className={`fixed top-0 left-0 w-full h-[45dvh] z-[9999] ${getBackgroundStyle(backgroundStyle)} flex items-center justify-center
        border-b-2 border-slate-500`}>
            <div 
                className="absolute top-[5%] left-[5%] lg:left-[2%] w-6 lg:w-8 cursor-pointer"
                onClick={() => navigate("/")}
            >
                <ArrowLeft size="100%" weight="regular" color="#FFF" />
            </div>
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