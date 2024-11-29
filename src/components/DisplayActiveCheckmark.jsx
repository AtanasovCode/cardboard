import { CheckCircle, Check } from "@phosphor-icons/react";


const DisplayActiveCheckmark = () => {
    return (
        <div className="absolute bottom-[5%] left-[5%] w-4 h-4
        bg-slate-100 border-2 border-main-background rounded-full
        flex items-center justify-center
    ">
            <Check size="60%" weight="regular" color="#000" />
        </div>
    );
}

export default DisplayActiveCheckmark;