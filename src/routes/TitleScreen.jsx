import { useCardStore } from "../../useCardStore";

import hearts from '../assets/suits/heart.svg';
import diamonds from '../assets/suits/diamond.svg';
import spades from '../assets/suits/spades.svg';
import clubs from '../assets/suits/spade-1.svg'

import Card from "../components/Card";

const TitleScreen = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <div className="grid grid-cols-4 gap-1">
                <Card suit={hearts} number="5" />
                <Card suit={spades} number="J" />
                <Card suit={diamonds} number="10" />
                <Card suit={clubs} number="Q" />
            </div>
        </div>
    );
}

export default TitleScreen;