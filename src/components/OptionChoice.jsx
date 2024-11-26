import { useCardStore } from "../../useCardStore";
import BackgroundChoice from "./BackgroundChoice";
import SuitChoice from "./SuitChoice";

// for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const OptionChoice = ({ type, title, options }) => {

    const {
        backgroundStyle,
        cardBackground,
        cardOutlineColor,
        suitColor,
    } = useCardStore();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1024, // Below 1024px
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 400, // Below 480px
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <div className="w-full flex flex-col items-center justify-center mb-12 md:mb-16">
            <div className="w-full text-md lg:text-lg mb-6">
                {title}
            </div>
            <div className="w-full">
                <Slider
                    {...settings}
                >
                    {
                        type === "background" ?
                            (options.map((option) => {
                                const isSelected = cardBackground === option.name
                                    || backgroundStyle === option.name
                                    || cardOutlineColor === option.name;

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
