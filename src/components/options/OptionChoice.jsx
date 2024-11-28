import { useCardStore } from "../../../useCardStore";

import BackgroundChoice from "./BackgroundChoice";
import SuitChoice from "./SuitChoice";

import PrevArrow from "../slider/PrevArrow";
import NextArrow from "../slider/NextArrow";

// for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const OptionChoice = ({ type, title, options }) => {

    const {
        backgroundStyle,
        cardBackground,
        cardOutline,
        suitColor,
        isCardOutlineEnabled,
    } = useCardStore();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,

        responsive: [
            {
                breakpoint: 1024, // Below 1024px
                settings: {
                    slidesToShow: 6,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 400, // Below 480px
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    };

    const isActive = title === "Card Border Color" && isCardOutlineEnabled;
    const activeStyling = isActive ? "opacity-100" : "opacity-30 pointer-events-none";

    return (
        <div className={`
            w-full flex flex-col items-center justify-center ${title === "Card Border Color" && activeStyling}
            transition-all duration-300 ease-in-out
        `}>
            <div className="w-full text-sm md:text-base mb-2 lg:mb-4 text-center sm:text-left">
                {title}
            </div>
            <div className={`w-full`}>
                <Slider
                    {...settings}
                >
                    {
                        type === "background" ?
                            (options.map((option) => {
                                const isSelected = cardBackground === option.name
                                    || backgroundStyle === option.name
                                    || cardOutline === option.name;

                                return (
                                    <BackgroundChoice
                                        key={option.name}
                                        isSelected={isSelected}
                                        name={option.name}
                                        color={option.color}
                                        handleClick={option.handleClick}
                                    />
                                );
                            }))
                            :
                            (options.map((option, index) => {
                                const isSelected = suitColor === option.name;
                                return (
                                    <SuitChoice
                                        idx={index}
                                        key={option.name}
                                        isSelected={isSelected}
                                        name={option.name}
                                        color={option.name}
                                        colors={option.colors}
                                        handleClick={option.handleClick}
                                    />
                                );
                            }))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default OptionChoice;
