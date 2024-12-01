import { useNavigate } from "react-router-dom";
import { Strategy } from "@phosphor-icons/react";

const HowToPlayLink = () => {

    const navigate = useNavigate();

    return (
        <div
            className="flex items-center justify-center absolute top-[4%] right-[4%]"
            onClick={() => {
                console.log("CLICK")
                navigate("/how-to-play")
            }}
        >
            <div
                className="flex items-center justify-center motion-safe:animate-bounce"
            >
                <div className="text-sm text-white">
                    How To Play
                </div>
                <div className="ml-2 w-8">
                    <Strategy size="100%" weight="fill" fill="#FFF" />
                </div>
            </div>
        </div>
    );
}

export default HowToPlayLink;