import { useCardStore } from "../../useCardStore";

const TitleScreen = () => {

    const { bears } = useCardStore();

    return (
        <div className="min-h-screen bg-black text-white">
            Title Screen

            {bears}
        </div>
    );
}

export default TitleScreen;